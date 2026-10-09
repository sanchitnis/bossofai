# Step 3: Visualization

Now let's visualize the scores.

**Prompt for AI**:
`Using matplotlib, create a bar chart of 'Student' vs 'Score' from a CSV named 'cleaned_data.csv'. Set color to 'skyblue' and add a title.`

### Run the generated code:
Create `plot.py`:
```python
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv('cleaned_data.csv')
plt.bar(df['Student'], df['Score'], color='skyblue')
plt.title('REVA Student Scores')
plt.ylabel('Score')
plt.savefig('plot.png')
print("Plot saved as plot.png")
```

Run it:
```bash
python3 plot.py
```

You've successfully completed a data loop with AI!
