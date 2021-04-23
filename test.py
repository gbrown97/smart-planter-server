import json
import sys

jsonDict = {
    "visibleLight": 260,
    "uvIndex": 0.02,
    "tempF": 68.0,
    "moisture": 1023
}

jsonObj = json.dumps(jsonDict)
print(jsonObj)
sys.stdout.flush()