define(['base/js/namespace', 'base/js/events'], function (Jupyter, events) {
  // Template cells including markdown and imports
  var setUp = function () {
    Jupyter.notebook.insert_cell_at_index('markdown', 0)
      .set_text(`# Abstract
State notebook purpose here`)
    Jupyter.notebook.insert_cell_at_index('markdown', 1).set_text(`### Imports
Import libraries and write settings here.`)
    // Define imports and settings
    Jupyter.notebook.insert_cell_at_index('code', 2)
      .set_text(`# OS related
import os
import sys
from pathlib import Path

# Data manipulation
import pandas as pd
import numpy as np

# Options for pandas
pd.options.display.max_columns = 50
pd.options.display.max_rows = 30
pd.options.display.float_format = '{:,.4f}'.format

# autoreload extension
%load_ext autoreload
%autoreload 2

# add repo root path to pythonpath
### Note: this assumes custom python modules are accessible in the root path AND notebooks are in a folder inside root, e.g. root/notebooks
sys.path.insert(0, str(Path.cwd().parent))`)
    Jupyter.notebook.insert_cell_at_index('markdown', 3)
      .set_text(`## Read Data
Read/Import data here`)
    Jupyter.notebook.insert_cell_at_index('markdown', 4)
      .set_text(`# Explorative/Data Visualization
Explore and visualize data`)
    Jupyter.notebook.insert_cell_at_index('markdown', 5)
      .set_text(`# Analysis/Modeling
Do work here`)
    Jupyter.notebook.insert_cell_at_index('markdown', 6).set_text(`# Results
Show graphs and stats here`)
    Jupyter.notebook.insert_cell_at_index('markdown', 7)
      .set_text(`# Open Points and Future Work
Summarize findings here`)
    // Run all cells
    Jupyter.notebook.execute_all_cells()
  }
  // Prompts user to enter name for notebook
  var promptName = function () {
    // Open rename notebook box if 'Untitled' in name
    if (Jupyter.notebook.notebook_name.search('Untitled') != -1) {
      document.getElementsByClassName('filename')[0].click()
    }
  }
  // Run on start
  function load_ipython_extension () {
    // Add default cells for new notebook
    if (Jupyter.notebook.get_cells().length === 1) {
      setTimeout(setUp, 500)
    } else {
      promptName()
    }
  }
  // Run when cell is executed
  events.on('execute.CodeCell', function () {
    promptName()
  })
  // Run when notebook is saved
  events.on('before_save.Notebook', function () {
    promptName()
  })
  return {
    load_ipython_extension: load_ipython_extension
  }
})
