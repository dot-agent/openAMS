# Pandas CSV Loader

This loader extracts the text from a local .csv file using the `pandas` Python package. A single local file is passed in each time you call `load_data`.

## Usage

To use this loader, you need to pass in a `Path` to a local file.

```python
from pathlib import Path
from openams import download_loader

PandasCSVReader = download_loader("PandasCSVReader")

loader = PandasCSVReader()
documents = loader.load_data(file=Path('./transactions.csv'))
```

This loader is designed to be used as a way to load data into [LlamaIndex](https://github.com/jerryjliu/gpt_index/tree/main/gpt_index) and/or subsequently used as a Tool in a [LangChain](https://github.com/hwchase17/langchain) Agent. See [here](https://github.com/emptycrown/llama-hub/tree/main) for examples.