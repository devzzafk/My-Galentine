import streamlit as st
import streamlit.components.v1 as components

# Load your React build
with open("frontend_build/index.html", "r") as f:
    html_code = f.read()

components.html(html_code, height=800, width=1200)
