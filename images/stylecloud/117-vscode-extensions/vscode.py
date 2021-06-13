# -*- coding: utf-8 -*-
"""Stylecloud configuration for the article."""
import stylecloud

stylecloud.gen_stylecloud(
    size=730,
    file_path='./117-vscode-extensions-readme.txt',
    icon_name='fab fa-windows',
    palette='colorbrewer.diverging.Spectral_11',
    background_color='#00a2ed',
    gradient='horizontal',
    output_name='117-extensions-vs-code-stylecloud.png',
    invert_mask=False,
    max_font_size=200,
)
