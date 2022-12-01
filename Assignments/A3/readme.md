# Assignment 3 
Design a web page to access the unicorns database. The web page allows searching by name, weight, or type of food. 

After search is done, it allows filtering the fields. 

Due Dec. the 9th.
If you want a feedback, I will mark yours by Monday the 5th.

![](https://cdn.discordapp.com/attachments/1017862173881544775/1046893800670371880/screencapture-localhost-5000-2022-11-28-13_01_47.png)


## Rubric  [Out of 10]
Positive rubric items:
- If searching is working, you should get [6] marks
```

Test Case 0
Name = Aurora
Result: Aurora's object

Test Case 1
400 <= weight <= 600 
Result => Horny,Aurora,Roooooodles,Solnara,Raleigh,Nimue

Test Case 2
200 <= weight <= 450 
Result => Aurora,Raleigh

Test Case 3
Unicorns which like carrot
Result => Horny,Aurora,Solnara,Nimue

Test Case 4
Unicorns which like apple
Result => Roooooodles,Solnara,Raleigh,Leia,Pilot

Test Case 5
Unicorns which like apple and carrot
Result => Solnara
```


- If filtering/projection is working, you should get [4] marks
```
Test Case 1 - Filter Name Only
Test Case 2 - Filter Weight Only
Test Case 3 - Filter Name and Weight together
Test Case 4 - No Filters
```

# Deliverables
  - One minute max YT offline video demonstrating that the UI works. 
  - GitHub link for code 
  - GitHub link for Self-Graded sheet - Grade your self out of 10 based on whether you think you have passed the previous 10 test cases.
  - [Optional] Deploy your site on render.com. Instructions on how-to will posted. 