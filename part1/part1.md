1. 3 will be printed because the for loop completes when i=prices.length and the variable is kept outside of the loop because it was declared with var.
2. 150 will be printed because the value will remain as it was when the for loop terminates on the last value in prices and the variable is kept outside of the loop because it was declared with var.
3. 150 will be printed because the value will remain as it was when the for loop terminates on the last value in prices. 
4. \[50, 100, 150\] Each value in prices will be processed in the for loop, getting multiplied by 1-0.5. Since the values have no decimal portion even after being multiplied by 0.5, the line with Math.round() does not change them. The new values are added to discounted and ultimately returned.
5. There will be an error because i does not exist outside of the scope of the for loop.
6. There will be an error because discountedPrice does not exist outside the scope of the for loop.
7. 150 will be printed because the value will remain as it was when the for loop terminates on the last value in prices, and the log() statement is in the same scope as the declaration of finalPrice. 
8. \[50, 100, 150\] Each value in prices will be processed in the for loop, getting multiplied by 1-0.5. Since the values have no decimal portion even after being multiplied by 0.5, the line with Math.round() does not change them. The new values are added to discounted and ultimately returned.
9. There will be an error because i does not exist outside of the scope of the for loop.
10. There will be an error because discountedPrice does not exist outside the scope of the for loop.
11. 0 will be printed because finalPrice is never updated after the initialization.
12. \[0,0,0\] finalPrice cannot be updated, so 0 is pushed to discounted 3 times.
13. A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]
14. A. "32"
    B. 1
    C. 3
    D. "3null"
    E. 4
    F. 0
    G. "3undefined"
    H. NaN
15. A. true
    B. true
    C. false
    D. true
    E. false
    F. true
16. The == operator performs automatic conversions (like converting true to 1 in 2==true) before comparing, while the === operator performs no conversions and just returns false if the types are not the same.
17. "How are you?" gets printed because the first conditional becomes 2==1 which is false, and the second conditional is converted to true, so that block is executed.
\19. \[6,8,10\], First, modifyArray is called on \[1,2,3\] and doSomething. In the for loop, doSomething is called on 1 and the function defined in the loop. doSomething calls the function defined in the loop on 1+2, and the function in the loop returns 6 which is ultimately pushed to newArr. Essentially each value in the original array is incremented by 2 and then multiplied by 2, giving \[6,8,10\] as the final result.
\21. 1432
