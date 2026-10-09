# Step 2: Data Cleaning with AI

Instead of manually fixing the "missing" value, we can ask an AI (via a prompt) how to handle it in Python.

**Prompt for AI**:
`I have a pandas dataframe with a 'Score' column. Some values are the string 'missing'. Write a Python snippet to convert 'missing' to the average of the numeric scores.`

### Try it out:
Create a file named `clean.py` with the code below:
```python
import pandas as pd

df = pd.read_csv('data.csv')
# AI generated cleaning logic
df['Score'] = pd.to_numeric(df['Score'], errors='coerce')
df['Score'] = df['Score'].fillna(df['Score'].mean())

print(df)
df.to_csv('cleaned_data.csv', index=False)
```

Run it:
```bash
python3 clean.py
```
Check the output to see how the missing value was filled with the average!
