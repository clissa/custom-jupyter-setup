#!/bin/bash

# install requirements
conda install -c conda-forge jupyter jupyter_contrib_nbextensions autopep8 

# install nbextensions
mv setup ~/.local/share/jupyter/nbextensions/
jupyter contrib nbextension install --user

#enable useful extensions
jupyter nbextension enable toc2/main
jupyter nbextension enable toggle_all_line_numbers/main
jupyter nbextension enable excute_time/main
jupyter nbextension enable setup/main

# use custom rendering options
mkdir -p ~/.jupyter/custom
cp custom.css ~/.jupyter/custom/
