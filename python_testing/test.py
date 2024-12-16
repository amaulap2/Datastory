import plotly.graph_objects as go

# Create the figure
fig = go.Figure(data=[go.Surface(z=[[1, 2, 3], [4, 5, 6], [7, 8, 9]])])

# Update layout
fig.update_layout(title='3D Plot', autosize=False,
                  width=500, height=500,
                  margin=dict(l=65, r=50, b=65, t=90))

# Specify the file path where you want to save the HTML file
file_path = 'C:/Users/amaur/Documents/MA3/ADA/ADA2024/DataStory/data/3d_plot.html'

# Write the figure to an HTML file
fig.write_html(file_path)

print(f"HTML file saved at {file_path}")
