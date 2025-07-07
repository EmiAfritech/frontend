import os

structure = {
    "components": [
        "AlertDemo.js",
        "ChatInterface.js",
        "Features.js",
        "Footer.js",
        "Hero.js",
        "MitigationPlaybo.js",
        "Navbar.js",
        "RiskScoreCard.js",
        "ScenarioGuidance.js",
    ],
    "pages": [
        "Contact.js",
        "Demo.js",
        "FeatureDetail.js",
        "Home.js",
    ],
    "styles": [
        "main.css",
    ],
    "": [  # root files
        "App.js",
        "index.html",
        "index.js",
    ]
}

# Create folders and files
for folder, files in structure.items():
    if folder:  # If not root
        os.makedirs(folder, exist_ok=True)
    for file in files:
        path = os.path.join(folder, file)
        with open(path, 'w') as f:
            f.write(f"// {file} created\n")

print("Folder and file structure created.")
