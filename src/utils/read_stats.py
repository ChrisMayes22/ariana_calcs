import json;
from statistics import stdev, median
with open("./data.json") as outfile:
    data = list(json.load(outfile)["data"])


ariana = []
quelani = []
days = []
for stat in data:
    if stat[0]:
        ariana.append(stat[2])
    if stat[1]:
        quelani.append(stat[2])        
    if stat[2] < 10:
        days.append(stat[2])

print(f"\
        PROB ARIANA: {len(ariana)/len(data)} \n\
        PROB QUELANI: {len(quelani)/len(data)} \n\
        AVERAGE A: {sum(ariana)/len(ariana)}\n\
        AVERAGE Q: {sum(quelani)/len(quelani)} \n\
        MEDIAN A: {median(ariana)}\n\
        MEDIAN Q: {median(quelani)} \n\
        LIKELIHOOD 9 OR FEWER DAYS: {len(days)/len(data)}")