"""
mouse_swap.py
右クリック＝コピー、左クリック＝ペーストに入れ替えるWindowsアプリ。
依存: pynput, pyperclip, tkinter (標準)
インストール: pip install pynput pyperclip
"""

import sys
import threading
import tkinter as tk
from tkinter import font as tkfont

try:
    import pynput
    from pynput import mouse, keyboard
    from pynput.mouse import Button, Controller as MouseController
    import pyperclip
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pynput", "pyperclip"])
    from pynput import mouse, keyboard
    from pynput.mouse import Button, Controller as MouseController
    import pyperclip

import ctypes

# ───────────────────────── グローバル状態 ─────────────────────────

enabled = True          # 機能ON/OFF
_suppress_next = False  # 擬似クリック再入防止
mouse_ctrl = MouseController()

# ───────────────────────── クリップボード操作 ─────────────────────

def do_copy():
    """Ctrl+C を送信してコピー"""
    kb = keyboard.Controller()
    with kb.pressed(keyboard.Key.ctrl):
        kb.press('c')
        kb.release('c')

def do_paste():
    """Ctrl+V を送信してペースト"""
    kb = keyboard.Controller()
    with kb.pressed(keyboard.Key.ctrl):
        kb.press('v')
        kb.release('v')

# ───────────────────────── マウスフック ──────────────────────────

def on_click(x, y, button, pressed):
    global _suppress_next, enabled

    if not enabled:
        return True  # 通常動作に任せる

    if _suppress_next:
        _suppress_next = False
        return True  # 再入ガード

    if pressed:
        if button == Button.left:
            # 左クリック → ペースト
            _suppress_next = True
            threading.Thread(target=do_paste, daemon=True).start()
            return False  # イベントを抑制

        elif button == Button.right:
            # 右クリック → コピー
            _suppress_next = True
            threading.Thread(target=do_copy, daemon=True).start()
            return False  # イベントを抑制

    return True

# ───────────────────────── キーボードフック ──────────────────────

_ctrl_pressed = False

def on_key_press(key):
    global _ctrl_pressed
    if key in (keyboard.Key.ctrl_l, keyboard.Key.ctrl_r):
        _ctrl_pressed = True
    try:
        if _ctrl_pressed and hasattr(key, 'char') and key.char == 'm':
            toggle_enabled()
    except AttributeError:
        pass

def on_key_release(key):
    global _ctrl_pressed
    if key in (keyboard.Key.ctrl_l, keyboard.Key.ctrl_r):
        _ctrl_pressed = False
    if key == keyboard.Key.esc:
        quit_app()

# ───────────────────────── アプリ制御 ────────────────────────────

def toggle_enabled():
    global enabled
    enabled = not enabled
    update_ui()

def quit_app():
    mouse_listener.stop()
    kb_listener.stop()
    root.after(0, root.destroy)

# ───────────────────────── GUI ────────────────────────────────────

def update_ui():
    if enabled:
        status_label.config(text="ON", fg="#00ff88")
        toggle_btn.config(text="ON", bg="#1a3a2a", fg="#00ff88", activebackground="#0d2a1a")
        root.title("MouseSwap [ON]")
    else:
        status_label.config(text="OFF", fg="#888888")
        toggle_btn.config(text="OFF", bg="#2a2a2a", fg="#888888", activebackground="#1a1a1a")
        root.title("MouseSwap [OFF]")


root = tk.Tk()
root.title("MouseSwap [ON]")
root.geometry("200x80")
root.resizable(False, False)
root.configure(bg="#111111")

# 常に最前面
root.attributes("-topmost", True)

# ウィンドウを右下に配置
root.update_idletasks()
sw = root.winfo_screenwidth()
sh = root.winfo_screenheight()
root.geometry(f"200x80+{sw - 220}+{sh - 130}")

# ── ラベル行 ──
top_frame = tk.Frame(root, bg="#111111")
top_frame.pack(fill="x", padx=8, pady=(8, 2))

title_label = tk.Label(top_frame, text="Mouse Swap", bg="#111111", fg="#cccccc",
                        font=("Consolas", 9, "bold"))
title_label.pack(side="left")

status_label = tk.Label(top_frame, text="ON", bg="#111111", fg="#00ff88",
                         font=("Consolas", 9, "bold"))
status_label.pack(side="right")

# ── ボタン行 ──
btn_frame = tk.Frame(root, bg="#111111")
btn_frame.pack(fill="x", padx=8, pady=4)

toggle_btn = tk.Button(
    btn_frame, text="ON", width=7,
    bg="#1a3a2a", fg="#00ff88", activebackground="#0d2a1a", activeforeground="#00ff88",
    relief="flat", bd=0, font=("Consolas", 9, "bold"), cursor="hand2",
    command=toggle_enabled
)
toggle_btn.pack(side="left", padx=(0, 4))

hint_label = tk.Label(btn_frame, text="Ctrl+M", bg="#111111", fg="#555555",
                       font=("Consolas", 7))
hint_label.pack(side="left")

close_btn = tk.Button(
    btn_frame, text="×", width=3,
    bg="#3a1a1a", fg="#ff6666", activebackground="#2a0a0a", activeforeground="#ff6666",
    relief="flat", bd=0, font=("Consolas", 10, "bold"), cursor="hand2",
    command=quit_app
)
close_btn.pack(side="right")

# ── ヒント ──
hint2 = tk.Label(root, text="右クリック=コピー　左クリック=ペースト", bg="#111111", fg="#444444",
                  font=("Consolas", 6))
hint2.pack(pady=(0, 4))

# ───────────────────────── リスナー起動 ──────────────────────────

mouse_listener = mouse.Listener(on_click=on_click, suppress=False)
mouse_listener.start()

kb_listener = keyboard.Listener(on_press=on_key_press, on_release=on_key_release)
kb_listener.start()

# ───────────────────────── メインループ ──────────────────────────

root.protocol("WM_DELETE_WINDOW", quit_app)
root.mainloop()
