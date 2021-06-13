# -*- coding: utf-8 -*-
"""Stylecloud configuration for the article."""
import stylecloud

stylecloud.gen_stylecloud(
    size=730,
    file_path='./pyenv-readme.txt',
    icon_name='fab fa-python',
    palette='colorbrewer.diverging.Spectral_11',
    background_color='black',
    gradient='horizontal',
    output_name='pyenv-stylecloud.png',
    invert_mask=False,
    max_font_size=100,
)
