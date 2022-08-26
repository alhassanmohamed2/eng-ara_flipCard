import pandas as pd
a = pd.read_csv("ara_eng.txt",delimiter="\t",names=["eng","ar"])
with open("ara_eng.json", 'w', encoding='utf-8') as file:
    a.to_json(file, force_ascii=False )

