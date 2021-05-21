#!/bin/bash

# install nbextensions
cp -r custom_setup ~/.local/share/jupyter/nbextensions/
jupyter contrib nbextension install --user

jupyter nbextension enable custom_setup/main

