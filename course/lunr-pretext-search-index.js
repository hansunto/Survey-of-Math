var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "notes-Voting",
  "level": "1",
  "url": "notes-Voting.html",
  "type": "Section",
  "number": "",
  "title": "1.1 Voting methods",
  "body": " 1.1 Voting methods   How to determine a Winner?     Preference ballots are ballots in which a voter is asked to rank all candidates in order of preference. A preference table shows how often each particular outcomes occurred.     Four candidates are running for student body president: Alice (A), Bonnie (B), Carlos (C) and Daniel (D). The students were asked to rank all the candidates in order of preference.   Preference Table For The Election Of Student Body President    Number of Votes  130  120  100  150    First choice  A  D  D  C    Second choice  B  B  B  B    Third choice  C  C  A  A    Fourth choice  D  A  C  D       How many students voted in the election?  How many students selected the candidates in this order : D, B, A, C?  How many students selected Daniel (D) as their first choice for student body president?         To find the total number of students, sum the votes in the top row: students.    Looking at the columns, the order D, B, A, C appears in the third column. There were students who voted in this order.    Daniel (D) is listed as the first choice in the second and third columns. The total number of students is students.         The Plurality Method   The candidate (or candidates, if there is more than one) with the most first-place votes is the winner.       shows the preference table for the four candidates running for student body president. Who is declared the winner using the Plurality method?    A received 130 first-place votes, D received first-place votes and C received 150 first-place votes. Thus Daniel is the winner.       Majority Rule Decision is when more than 50% of the voters rank a candidate in first-place. The majority rule will almost always have a winner.    The Plurality-with-Elimination Method   The candidate with the majority (over 50% votes) of first-place votes is the winner. If no candidate receives a majority, eliminate the candidate with the fewest first-place votes. Move the candidates below them up one place and recount. Repeat until a candidate has a majority.     Elimination Method Example   Determine the winner for the student president election from , using Plurality-with-Elimination.    Total votes = 500. Majority needed = 251.   Round 1: A=130, D=220, C=150, B=0. No majority. Bonnie (B) is eliminated.   Preference Table: Round 2 (Bonnie Eliminated)    Number of Votes  130  120  100  150    First choice  A  D  D  C    Second choice  C  C  A  A    Third choice  D  A  C  D      Round 2: After shifting votes up, the first-place votes remain: A=130, D=220, C=150. Still no majority. Alice (A) has the fewest (130) and is eliminated.   Preference Table: Final Round (Alice and Bonnie Eliminated)    Number of Votes  130  120  100  150    First choice  C  D  D  C    Second choice  D  C  C  D      Round 3: Alice's 130 votes go to her next preferred candidate, Carlos (C). New totals: Daniel = 220, Carlos = .  Carlos now has 280 votes (a majority). Carlos is the winner.      The Borda Count Method   Each voter ranks the candidates from the most favorable to the least favorable. Each last-place vote is given 1 point, each next-to-last-place vote is given 2 points, and so on. The points are totaled for each candidate separately. The candidate with the most points is the winner.     Borda Count Example   Using the preference data from , who is declared the winner using the Borda Count Method?    With 4 candidates, 1st place gets 4 pts, 2nd gets 3 pts, 3rd gets 2 pts, and 4th gets 1 pt.   Borda Count Calculation Table    Number of Votes  130  120  100  150    1st choice: 4 pts  A:  D:  D:  C:    2nd choice: 3 pts  B:  B:  B:  B:    3rd choice: 2 pts  C:  C:  A:  A:    4th choice: 1 pt  D:  A:  C:  D:      Alice (A):  pts  Bonnie (B):  pts  Carlos (C):  pts  Daniel (D):  pts   Bonnie is the winner with 1500 points.      The Pairwise Comparison Method   Every candidate is matched on a one-to-one basis with every other candidate. If candidate A beats candidate B in one-to-one competition, then A receives 1 point and B receives 0. If they tie, each receives 0.5 points. The candidate with the most total points is the winner.  In an election with candidates, the number of comparisons, , is calculated as:      Pairwise Comparison Example   Using the same preference , for the four candidates (Alice, Bonnie, Carlos, and Daniel), who is the winner using the Pairwise Comparison Method?    With candidates, there are total comparisons (A vs.B, A vs.C, A vs.D, B vs.C, B vs.D, C vs.D) and determine the winner using the pairwise comparison method.     130 120 100 150  A B B B  B A A A   A vs B     130 120 100 150  A C A C  C A C A   A vs C     130 120 100 150  A D D A  D A A D   A vs D       130 120 100 150  B B B C  C C C B   B vs C     130 120 100 150  B D D B  D B B D   B vs D     130 120 100 150  C D D C  D C C D   C vs D       A vs B: Alice is preferred over Bonnie in 130 ballots. Bonnie is preferred over Alice in ballots. Winner: Bonnie (B gets 1 pt)      A vs C: Alice is preferred over Carlos in ballots. Carlos is preferred over Alice in 150. Winner: Alice (A gets 1 pt)      A vs D: Alice is preferred over Daniel in 130 ballots. Daniel is preferred over Alice in ballots. Winner: Daniel (D gets 1 pt)      B vs C: Bonnie is preferred over Carlos in ballots. Carlos is preferred over Bonnie in 150. Winner: Bonnie (B gets 1 pt)      B vs D: Bonnie is preferred over Daniel in ballots. Daniel is preferred over Bonnie in . Winner: Bonnie (B gets 1 pt)      C vs D: Carlos is preferred over Daniel in ballots. Daniel is preferred over Carlos in . Winner: Carlos (C gets 1 pt)      Final Point Totals:   Bonnie (B): 3 points  Alice (A): 1 point  Daniel (D): 1 point  Carlos (C): 1 point    Bonnie is the winner using Pairwise Comparison.     If a candidate wins all pair comparisons with other candidates, that candidate is called the Condorcet winner . A Condorcet winner automatically wins by the pairwise comparisons method.    Condorcet Winner   Is there a Condorcet winner in the following election?   Preference Table for Condorcet Example    Number of Votes  30  30  30  20    First choice  B  B  A  A    Second choice  A  A  C  D    Third choice  C  D  D  C    Fourth choice  D  C  B  B       To find a Condorcet winner, we must see if one candidate wins every head-to-head matchup. Let's check candidate B and candidate A :     B vs A: B is ranked higher than A in ballots. A is ranked higher than B in ballots. Winner: B .     B vs C: B is ranked higher than C in ballots (every ballot). Winner: B .     B vs D: B is ranked higher than D in ballots (every ballot). Winner: B .    Since B beats every other candidate in a one-on-one comparison, B is the Condorcet winner .      Arrow's Impossibility Theorem states that a ranked-voting electoral system cannot reach a community-wide ranked preference by converting individuals' preferences while meeting all the conditions of a fair voting system.  Consider the following situation with 3 candidates in one-to-one competition (pairwise comparison method):  Suppose candidate A beats candidate B  Suppose candidate B beats candidate C  Suppose candidate C beats candidate A    When this occurs, it is because the conflicting majorities are each made up of different groups of individuals. No winner can be determined.  This is called the Condorcet Paradox (also known as the voting paradox).    Condorcet Paradox   Who would win this election through the pairwise comparison method?   Preference Table: Three-Candidate Election    Number of Votes  8  9  10    First choice  C  B  A    Second choice  A  C  B    Third choice  B  A  C       We perform the three possible head-to-head comparisons:     A vs B: A is preferred on 8 (col 1) + 10 (col 3) = 18 ballots. B is preferred on 9 (col 2) ballots. Winner: A (A gets 1 pt).     B vs C: B is preferred on 9 (col 2) + 10 (col 3) = 19 ballots. C is preferred on 8 (col 1) ballots. Winner: B (B gets 1 pt).     C vs A: C is preferred on 8 (col 1) + 9 (col 2) = 17 ballots. A is preferred on 10 (col 3) ballots. Winner: C (C gets 1 pt).    Each candidate (A, B, and C) has exactly 1 point. This is a Condorcet Paradox because there is a \"rock-paper-scissors\" loop (A beats B, B beats C, and C beats A), resulting in a three-way tie.     Mayor of a Small Town   Three candidates A, B, and C are running for mayor of a small town. The results of the election are shown in the following preference table.   Mayor Election Preference Table    Number of Votes  1200  900  900  600    First choice  A  C  B  B    Second choice  B  A  C  A    Third choice  C  B  A  C       Determine the winner using the Plurality method.  Determine the winner using the Borda count method.  Determine the winner using the Plurality-with-elimination method.  Is there a Condorcet Winner?          Plurality: A = 1200, B = , C = 900. Winner: B .     Borda Count (3-2-1):   A:  B:  C:   Winner: B .     Plurality-with-Elimination: Total votes = 3600; Majority = 1801. Round 1: A=1200, B=1500, C=900. No majority. Eliminate C. C's 900 votes go to A (second choice). Final: A = , B = 1500. Winner: A .     Condorcet Winner Check:   A vs B: A is preferred on . B on 1500. (A wins)  A vs C: A is preferred on . C on . (Tie)  Since A does not win all matches, No Condorcet Winner exists .          Plurality Method  We count only the first-place votes for each candidate:   A: 1200 votes  B:  votes  C: 900 votes   Winner: B (1500 votes).    Borda Count Method (3-2-1 Points)   Borda Count Point Distribution    Candidate  1st (3 pts)  2nd (2 pts)  3rd (1 pt)  Total Points    A        B        C         Winner: B (7800 points).    Plurality-with-Elimination  Total Votes: 3600. Majority needed: 1801.  Round 1: A=1200, B=1500, C=900. No candidate has 1801. Eliminate C.   Final Round (C Eliminated)   Votes 1200 900 900 600  1st A A B B  2nd B B A A    New totals: A = . B = . Winner: A (2100 votes).        Math Club Presidential Election   Four candidates are running for president of the Math Club: Paula (P), Sylvia (S), Craig (C), and Brian (B). The results of the election are shown in the following preference table:   Election Preference Schedule    Number of Votes  15  19  23  10  18  15    First choice  B  C  P  P  S  B    Second choice  S  P  S  B  C  S    Third choice  P  S  B  C  P  C    Fourth choice  C  B  C  S  B  P       How many students voted in the election?  How many students voted Brian as their first choice?  Who would win the presidency using the Plurality method?  Is there a Majority Winner?  Who would win the presidency using the Plurality with Elimination method?  Who would win the presidency using the Borda count method?   Who would win the presidency using the pairwise comparison method? If a tie, use the Plurality method between the winners to determine the tie-breaker.          100 students  30 students  Paula (33 votes)  No (Majority requires 51 votes)  Craig  Sylvia (279 points)  Paula (3 points)         Total Votes: 100.  Brian 1st choice: 30.  Plurality Winner: Paula (33).  Majority: No (Requires 51).   Plurality with Elimination:  Round 1: Sylvia has the fewest 1st-place votes (18) and is eliminated.   Round 2 (Sylvia Eliminated)   Votes 15 19 23 10 18 15  1st B C P P C B  2nd P P B B P C  3rd C B C C B P    New totals: P=33, B=30, C=37 (19 + 18). Brian is eliminated.   Round 3 (Brian Eliminated)   Votes 15 19 23 10 18 15  1st P C P P C C  2nd C P C C P P    Round 3: Paula vs. Craig. Craig wins the final matchup against Paula 52 to 48.  Winner: Craig.    Borda Count Method:  Using 4 pts for 1st, 3 for 2nd, 2 for 3rd, and 1 for 4th:   Paula:  Sylvia:  Craig:  Brian:   Winner: Sylvia.    Pairwise Comparison:  For the Pairwise Comparison Method , we compare every possible pair. There are 100 total votes, so 51 are needed to win a matchup:  P vs. S: P has 52; S has 48. (P gets 1 pt)  P vs. C: P has 63; C has 37. (P gets 1 pt)  P vs. B: P has 70; B has 30. (P gets 1 pt)  S vs. C: S has 81; C has 19. (S gets 1 pt)  S vs. B: S has 60; B has 40. (S gets 1 pt)  C vs. B: C has 60; B has 40. (C gets 1 pt)     Total Points: Paula = 3, Sylvia = 2, Craig = 1, Brian = 0. Paula is the winner; no tie-breaker is required.       "
},
{
  "id": "notes-Voting-3-1",
  "level": "2",
  "url": "notes-Voting.html#notes-Voting-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Preference ballots preference table "
},
{
  "id": "exe-student-president",
  "level": "2",
  "url": "notes-Voting.html#exe-student-president",
  "type": "Example",
  "number": "1.1",
  "title": "",
  "body": "  Four candidates are running for student body president: Alice (A), Bonnie (B), Carlos (C) and Daniel (D). The students were asked to rank all the candidates in order of preference.   Preference Table For The Election Of Student Body President    Number of Votes  130  120  100  150    First choice  A  D  D  C    Second choice  B  B  B  B    Third choice  C  C  A  A    Fourth choice  D  A  C  D       How many students voted in the election?  How many students selected the candidates in this order : D, B, A, C?  How many students selected Daniel (D) as their first choice for student body president?         To find the total number of students, sum the votes in the top row: students.    Looking at the columns, the order D, B, A, C appears in the third column. There were students who voted in this order.    Daniel (D) is listed as the first choice in the second and third columns. The total number of students is students.      "
},
{
  "id": "def-plurality-method",
  "level": "2",
  "url": "notes-Voting.html#def-plurality-method",
  "type": "Definition",
  "number": "1.3",
  "title": "The Plurality Method.",
  "body": " The Plurality Method   The candidate (or candidates, if there is more than one) with the most first-place votes is the winner.   "
},
{
  "id": "ex-plurality",
  "level": "2",
  "url": "notes-Voting.html#ex-plurality",
  "type": "Example",
  "number": "1.4",
  "title": "",
  "body": "   shows the preference table for the four candidates running for student body president. Who is declared the winner using the Plurality method?    A received 130 first-place votes, D received first-place votes and C received 150 first-place votes. Thus Daniel is the winner.   "
},
{
  "id": "notes-Voting-7-1",
  "level": "2",
  "url": "notes-Voting.html#notes-Voting-7-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Majority Rule Decision "
},
{
  "id": "def-elimination",
  "level": "2",
  "url": "notes-Voting.html#def-elimination",
  "type": "Definition",
  "number": "1.5",
  "title": "The Plurality-with-Elimination Method.",
  "body": " The Plurality-with-Elimination Method   The candidate with the majority (over 50% votes) of first-place votes is the winner. If no candidate receives a majority, eliminate the candidate with the fewest first-place votes. Move the candidates below them up one place and recount. Repeat until a candidate has a majority.   "
},
{
  "id": "exe-elimination-example",
  "level": "2",
  "url": "notes-Voting.html#exe-elimination-example",
  "type": "Example",
  "number": "1.6",
  "title": "Elimination Method Example.",
  "body": " Elimination Method Example   Determine the winner for the student president election from , using Plurality-with-Elimination.    Total votes = 500. Majority needed = 251.   Round 1: A=130, D=220, C=150, B=0. No majority. Bonnie (B) is eliminated.   Preference Table: Round 2 (Bonnie Eliminated)    Number of Votes  130  120  100  150    First choice  A  D  D  C    Second choice  C  C  A  A    Third choice  D  A  C  D      Round 2: After shifting votes up, the first-place votes remain: A=130, D=220, C=150. Still no majority. Alice (A) has the fewest (130) and is eliminated.   Preference Table: Final Round (Alice and Bonnie Eliminated)    Number of Votes  130  120  100  150    First choice  C  D  D  C    Second choice  D  C  C  D      Round 3: Alice's 130 votes go to her next preferred candidate, Carlos (C). New totals: Daniel = 220, Carlos = .  Carlos now has 280 votes (a majority). Carlos is the winner.   "
},
{
  "id": "def-borda-count",
  "level": "2",
  "url": "notes-Voting.html#def-borda-count",
  "type": "Definition",
  "number": "1.9",
  "title": "The Borda Count Method.",
  "body": " The Borda Count Method   Each voter ranks the candidates from the most favorable to the least favorable. Each last-place vote is given 1 point, each next-to-last-place vote is given 2 points, and so on. The points are totaled for each candidate separately. The candidate with the most points is the winner.   "
},
{
  "id": "exe-borda-example",
  "level": "2",
  "url": "notes-Voting.html#exe-borda-example",
  "type": "Example",
  "number": "1.10",
  "title": "Borda Count Example.",
  "body": " Borda Count Example   Using the preference data from , who is declared the winner using the Borda Count Method?    With 4 candidates, 1st place gets 4 pts, 2nd gets 3 pts, 3rd gets 2 pts, and 4th gets 1 pt.   Borda Count Calculation Table    Number of Votes  130  120  100  150    1st choice: 4 pts  A:  D:  D:  C:    2nd choice: 3 pts  B:  B:  B:  B:    3rd choice: 2 pts  C:  C:  A:  A:    4th choice: 1 pt  D:  A:  C:  D:      Alice (A):  pts  Bonnie (B):  pts  Carlos (C):  pts  Daniel (D):  pts   Bonnie is the winner with 1500 points.   "
},
{
  "id": "def-pairwise-comparison",
  "level": "2",
  "url": "notes-Voting.html#def-pairwise-comparison",
  "type": "Definition",
  "number": "1.12",
  "title": "The Pairwise Comparison Method.",
  "body": " The Pairwise Comparison Method   Every candidate is matched on a one-to-one basis with every other candidate. If candidate A beats candidate B in one-to-one competition, then A receives 1 point and B receives 0. If they tie, each receives 0.5 points. The candidate with the most total points is the winner.  In an election with candidates, the number of comparisons, , is calculated as:    "
},
{
  "id": "exe-pairwise-example",
  "level": "2",
  "url": "notes-Voting.html#exe-pairwise-example",
  "type": "Example",
  "number": "1.13",
  "title": "Pairwise Comparison Example.",
  "body": " Pairwise Comparison Example   Using the same preference , for the four candidates (Alice, Bonnie, Carlos, and Daniel), who is the winner using the Pairwise Comparison Method?    With candidates, there are total comparisons (A vs.B, A vs.C, A vs.D, B vs.C, B vs.D, C vs.D) and determine the winner using the pairwise comparison method.     130 120 100 150  A B B B  B A A A   A vs B     130 120 100 150  A C A C  C A C A   A vs C     130 120 100 150  A D D A  D A A D   A vs D       130 120 100 150  B B B C  C C C B   B vs C     130 120 100 150  B D D B  D B B D   B vs D     130 120 100 150  C D D C  D C C D   C vs D       A vs B: Alice is preferred over Bonnie in 130 ballots. Bonnie is preferred over Alice in ballots. Winner: Bonnie (B gets 1 pt)      A vs C: Alice is preferred over Carlos in ballots. Carlos is preferred over Alice in 150. Winner: Alice (A gets 1 pt)      A vs D: Alice is preferred over Daniel in 130 ballots. Daniel is preferred over Alice in ballots. Winner: Daniel (D gets 1 pt)      B vs C: Bonnie is preferred over Carlos in ballots. Carlos is preferred over Bonnie in 150. Winner: Bonnie (B gets 1 pt)      B vs D: Bonnie is preferred over Daniel in ballots. Daniel is preferred over Bonnie in . Winner: Bonnie (B gets 1 pt)      C vs D: Carlos is preferred over Daniel in ballots. Daniel is preferred over Carlos in . Winner: Carlos (C gets 1 pt)      Final Point Totals:   Bonnie (B): 3 points  Alice (A): 1 point  Daniel (D): 1 point  Carlos (C): 1 point    Bonnie is the winner using Pairwise Comparison.   "
},
{
  "id": "notes-Voting-14-1",
  "level": "2",
  "url": "notes-Voting.html#notes-Voting-14-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Condorcet winner "
},
{
  "id": "ex-condorcet-winner",
  "level": "2",
  "url": "notes-Voting.html#ex-condorcet-winner",
  "type": "Example",
  "number": "1.14",
  "title": "Condorcet Winner.",
  "body": " Condorcet Winner   Is there a Condorcet winner in the following election?   Preference Table for Condorcet Example    Number of Votes  30  30  30  20    First choice  B  B  A  A    Second choice  A  A  C  D    Third choice  C  D  D  C    Fourth choice  D  C  B  B       To find a Condorcet winner, we must see if one candidate wins every head-to-head matchup. Let's check candidate B and candidate A :     B vs A: B is ranked higher than A in ballots. A is ranked higher than B in ballots. Winner: B .     B vs C: B is ranked higher than C in ballots (every ballot). Winner: B .     B vs D: B is ranked higher than D in ballots (every ballot). Winner: B .    Since B beats every other candidate in a one-on-one comparison, B is the Condorcet winner .   "
},
{
  "id": "notes-Voting-16-1",
  "level": "2",
  "url": "notes-Voting.html#notes-Voting-16-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Arrow's Impossibility Theorem "
},
{
  "id": "notes-Voting-16-4",
  "level": "2",
  "url": "notes-Voting.html#notes-Voting-16-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Condorcet Paradox "
},
{
  "id": "ex-condorcet-paradox",
  "level": "2",
  "url": "notes-Voting.html#ex-condorcet-paradox",
  "type": "Example",
  "number": "1.16",
  "title": "Condorcet Paradox.",
  "body": " Condorcet Paradox   Who would win this election through the pairwise comparison method?   Preference Table: Three-Candidate Election    Number of Votes  8  9  10    First choice  C  B  A    Second choice  A  C  B    Third choice  B  A  C       We perform the three possible head-to-head comparisons:     A vs B: A is preferred on 8 (col 1) + 10 (col 3) = 18 ballots. B is preferred on 9 (col 2) ballots. Winner: A (A gets 1 pt).     B vs C: B is preferred on 9 (col 2) + 10 (col 3) = 19 ballots. C is preferred on 8 (col 1) ballots. Winner: B (B gets 1 pt).     C vs A: C is preferred on 8 (col 1) + 9 (col 2) = 17 ballots. A is preferred on 10 (col 3) ballots. Winner: C (C gets 1 pt).    Each candidate (A, B, and C) has exactly 1 point. This is a Condorcet Paradox because there is a \"rock-paper-scissors\" loop (A beats B, B beats C, and C beats A), resulting in a three-way tie.   "
},
{
  "id": "ex-mayor-election",
  "level": "2",
  "url": "notes-Voting.html#ex-mayor-election",
  "type": "Checkpoint",
  "number": "1.18",
  "title": "Mayor of a Small Town.",
  "body": " Mayor of a Small Town   Three candidates A, B, and C are running for mayor of a small town. The results of the election are shown in the following preference table.   Mayor Election Preference Table    Number of Votes  1200  900  900  600    First choice  A  C  B  B    Second choice  B  A  C  A    Third choice  C  B  A  C       Determine the winner using the Plurality method.  Determine the winner using the Borda count method.  Determine the winner using the Plurality-with-elimination method.  Is there a Condorcet Winner?          Plurality: A = 1200, B = , C = 900. Winner: B .     Borda Count (3-2-1):   A:  B:  C:   Winner: B .     Plurality-with-Elimination: Total votes = 3600; Majority = 1801. Round 1: A=1200, B=1500, C=900. No majority. Eliminate C. C's 900 votes go to A (second choice). Final: A = , B = 1500. Winner: A .     Condorcet Winner Check:   A vs B: A is preferred on . B on 1500. (A wins)  A vs C: A is preferred on . C on . (Tie)  Since A does not win all matches, No Condorcet Winner exists .          Plurality Method  We count only the first-place votes for each candidate:   A: 1200 votes  B:  votes  C: 900 votes   Winner: B (1500 votes).    Borda Count Method (3-2-1 Points)   Borda Count Point Distribution    Candidate  1st (3 pts)  2nd (2 pts)  3rd (1 pt)  Total Points    A        B        C         Winner: B (7800 points).    Plurality-with-Elimination  Total Votes: 3600. Majority needed: 1801.  Round 1: A=1200, B=1500, C=900. No candidate has 1801. Eliminate C.   Final Round (C Eliminated)   Votes 1200 900 900 600  1st A A B B  2nd B B A A    New totals: A = . B = . Winner: A (2100 votes).      "
},
{
  "id": "math-club-election",
  "level": "2",
  "url": "notes-Voting.html#math-club-election",
  "type": "Checkpoint",
  "number": "1.22",
  "title": "Math Club Presidential Election.",
  "body": " Math Club Presidential Election   Four candidates are running for president of the Math Club: Paula (P), Sylvia (S), Craig (C), and Brian (B). The results of the election are shown in the following preference table:   Election Preference Schedule    Number of Votes  15  19  23  10  18  15    First choice  B  C  P  P  S  B    Second choice  S  P  S  B  C  S    Third choice  P  S  B  C  P  C    Fourth choice  C  B  C  S  B  P       How many students voted in the election?  How many students voted Brian as their first choice?  Who would win the presidency using the Plurality method?  Is there a Majority Winner?  Who would win the presidency using the Plurality with Elimination method?  Who would win the presidency using the Borda count method?   Who would win the presidency using the pairwise comparison method? If a tie, use the Plurality method between the winners to determine the tie-breaker.          100 students  30 students  Paula (33 votes)  No (Majority requires 51 votes)  Craig  Sylvia (279 points)  Paula (3 points)         Total Votes: 100.  Brian 1st choice: 30.  Plurality Winner: Paula (33).  Majority: No (Requires 51).   Plurality with Elimination:  Round 1: Sylvia has the fewest 1st-place votes (18) and is eliminated.   Round 2 (Sylvia Eliminated)   Votes 15 19 23 10 18 15  1st B C P P C B  2nd P P B B P C  3rd C B C C B P    New totals: P=33, B=30, C=37 (19 + 18). Brian is eliminated.   Round 3 (Brian Eliminated)   Votes 15 19 23 10 18 15  1st P C P P C C  2nd C P C C P P    Round 3: Paula vs. Craig. Craig wins the final matchup against Paula 52 to 48.  Winner: Craig.    Borda Count Method:  Using 4 pts for 1st, 3 for 2nd, 2 for 3rd, and 1 for 4th:   Paula:  Sylvia:  Craig:  Brian:   Winner: Sylvia.    Pairwise Comparison:  For the Pairwise Comparison Method , we compare every possible pair. There are 100 total votes, so 51 are needed to win a matchup:  P vs. S: P has 52; S has 48. (P gets 1 pt)  P vs. C: P has 63; C has 37. (P gets 1 pt)  P vs. B: P has 70; B has 30. (P gets 1 pt)  S vs. C: S has 81; C has 19. (S gets 1 pt)  S vs. B: S has 60; B has 40. (S gets 1 pt)  C vs. B: C has 60; B has 40. (C gets 1 pt)     Total Points: Paula = 3, Sylvia = 2, Craig = 1, Brian = 0. Paula is the winner; no tie-breaker is required.      "
},
{
  "id": "section-apportionment",
  "level": "1",
  "url": "section-apportionment.html",
  "type": "Section",
  "number": "",
  "title": "1.2 Apportionment",
  "body": " 1.2 Apportionment   Apportionment is the method of distributing power in political systems based on population density. Apportionment may reflect the availability of buses for city routes or doctors for patients.   The Standard Divisor   The standard divisor is found by dividing the total population under consideration by the number of items to be allocated.      The Standard Quota   The standard quota for a particular group is found by dividing that group's population by the standard divisor.     >  Palm Springs is composed of four states: A, B, C, and D. According to the country's constitution, the congress will have 30 seats, divided among the four states according to their respective populations. Find the standard quotas for states A, B, C, and D and complete the table below.   Population of Palm Springs by State    State  A  B  C  D  Total    Population (in thousands)  275  383  465  767  1890    Standard Quota            First, we find the Standard Divisor ( ):   Now, divide each state's population by the divisor to find the Standard Quota ( ):  State A:  State B:  State C:  State D:        State  A  B  C  D  Total    Population (in thousands)  275  383  465  767  1890    Standard Quota  4.365  6.079  7.381  12.175         The lower quota is the standard quota rounded down to the nearest whole number. The upper quota is the standard quota rounded up to the nearest whole number.  A group's apportionment should be either its upper quota or its lower quota. An apportionment method that guarantees that this will always occurs is said to satisfy the quota rule .    Hamilton's Method     Calculate each group's standard quota.  Find the lower quota for each group.  Give surplus items, one at a time, to groups with the largest decimal parts until no surplus remains.      >  From , use Hamilton's method to apportion the 30 congressmen for Palm Springs.   Hamilton's Method Table    State A B C D Total   Population 275 383 465 767 1890  Standard Quota 4.365 6.079 7.381 12.175 30.00  Lower Quota 4 6 7 12 29  Surplus +0 +0 +1 +0 1  Apportionment 4 6 8 12 30    1. The Standard Divisor is .  2. Lower quotas sum to 29, leaving 1 surplus seat.  3. State C has the largest decimal part (.381), so it receives the surplus seat.    Following the steps of Hamilton's Method :   The sum of the Lower Quotas is . Since we must allocate 30 seats, there is surplus seat.    We look at the decimal parts of the Standard Quotas:  A:  B:  C:  D:      State C has the largest decimal part ( ), so it receives the 1 surplus seat.    Final counts: A=4, B=6, C=8, D=12.        Modified Divisor (MD)  A Modified divisor is a divisor, chosen by guess-and-check, that is used to make the sum of the modified quotas exactly equal to the number of items to be apportioned.    Jefferson's Method   Find a modified divisor such that when each group's modified quota is rounded down ( modified lower quota ), the sum equals the number of items to be apportioned. Apportion to each group its modified lower quota.   Calculate the Standard Divisor ( ).  Calculate Standard Quotas and round down to find Lower Quotas .  If the sum of Lower Quotas is less than the total seats, choose a Modified Divisor ( ) that is smaller than the .  Recalculate quotas using and round down until the sum exactly matches the total seats.        From , apportion 30 seats to Palm Springs using Jefferson's Method.    The standard divisor ( ) produced a sum of 29. For Jefferson's method, we must decrease the divisor to increase the quotas. Using a Modified Divisor of :  A:  B:  C:  D:  Sum: . State D receives the extra seat.   Jefferson's Method: Palm Springs    State A B C D Total   Population 275 383 465 767 1890  Standard Quota (SD=63) 4.365 6.079 7.381 12.175 30  Lower Quota 4 6 7 12 29  Modified Quota (MD=61) 4.508 6.279 7.623 12.574 30.98  Modified LQ (Apportionment) 4 6 7 13 30        Apportioning 11 buses   Apportion 11 buses to the three towns using Jefferson's method.   Bus Apportionment Table    Town Westboro Shrewbury Worcester Total   Population 89 120 168 377  Final Apportionment            Step 1: Standard Divisor and Initial Quotas First, find the Standard Divisor: .   Trial 1: Using Standard Divisor (34.27)    Town Westboro Shrewbury Worcester Total   Population 89 120 168 377  Standard Quota 2.59 3.50 4.90 10.99  Lower Quota 2 3 4 9    The sum (9) is too low. We need 11 buses. We must decrease the divisor.    Step 2: First Modified Divisor Trial (MD = 31) Let's try a smaller divisor, .   Trial 2: Modified Divisor (31)    Town Westboro Shrewbury Worcester Total   Modified Quota 2.87 3.87 5.41 12.15  Lower Quota 2 3 5 10    The sum (10) is still too low. We must decrease the divisor further.    Step 3: Successful Modified Divisor (MD = 30) Trying .   Final Apportionment: Modified Divisor (30)    Town Westboro Shrewbury Worcester Total   Modified Quota 2.96 4.00 5.60 12.56  Modified LQ 2 4 5 11    The sum is exactly 11. Final Apportionment: Westboro: 2, Shrewbury: 4, Worcester: 5.   Bus Apportionment Work Table    Town Westboro Shrewbury Worcester Total   Population 89 120 168 377  Standard Quota 2.59 3.50 4.90 10.99  Lower Quota 2 3 4 9  Modified Quota (MD=31) 2.87 3.87 5.41 12.15  Modified LQ 2 3 5 10  Modified Quota (MD=30) 2.96 4.00 5.60 12.56  Final Apportionment 2 4 5 11        Adam's Method     Find a modified divisor , , so that when each group's modified quota is the upper quota, the sum of the whole numbers for all the groups is the number of items to be apportioned. The modified quotients that are rounded up are called modified upper quota .    Apportion to each group its modified upper quota.       When using Adam's method, begin with a modified divisor that is slightly greater than the standard divisor.     The Palm Springs is composed of four states: A, B, C, and D. According to the country's constitution, the congress will have 30 seats, divided among the four states according to their respective populations.  Find the standard quotas for states A, B, C, and D in Palm Springs and complete the table below. Use Adam's method with a modified divisor to apportion the congressmen.   Population Data and Apportionment    State  A  B  C  D  Total    Population (1000s)  275  383  465  767  1890    Standard Quota         Upper Quota         Modified UQ         Apportionment      30       1. First, find the Standard Divisor ( ):   2. Calculate Standard Quotas ( ):  A: (Upper Quota: 5)  B: (Upper Quota: 7)  C: (Upper Quota: 8)  D: (Upper Quota: 13)  Sum of Upper Quotas = (Too many seats).  3. Since the sum is too high, we increase the divisor. Let's try :  A:  B:  C:  D:  Sum = (Too low).  4. Refined : Sums will result in A:5, B:6, C:7, D:12 = 30.  Using :    State  A  B  C  D  Total    Standard Quota ( )  4.37  6.08  7.38  12.18  30    Upper Quota  5  7  8  13  33    Mod. Quota ( )  4.14  5.76  6.99  11.53  —    Modified UQ  5  6  7  12  30       Finding the Modified Divisor for Adam's Method:    Compute the standard divisor .  Increase by an amount so that when allocations (State population \/ Modified D) are rounded upward, they add up to the exact number of seats.      Apportioning 7 Doctors   Apportion 7 doctors to 4 clinics using Adam's method.    Clinic  West  North  South  East  Total    Population  120  180  160  240  700    Appointment           Standard Divisor ( ) = .  The final apportionment using Adam's method with a modified divisor of md=120 is: West: 1, North: 2, South: 2, and East: 2.    Clinic  West  North  South  East  Total    Population  120  180  160  240  700    Standard Quota ( )  1.2  1.8  1.6  2.4  7    Upper Quota (Initial)  2  2  2  3  9 (Too High)    Mod. Quota ( )  1.0  1.5  1.33  2.0  —    Modified UQ (Final)  1  2  2  2  7       Apportioning 40 HMO Doctors   An HMO has 40 doctors to be apportioned among four clinics: A, B, C, and D.    Clinic  A  B  C  D    Patient Load  275  392  611  724    Apportionment              Use Hamilton's method.  Use Jefferson's method with .  Use Adam's method.      Hamilton's Method Solution  Calculate Standard Divisor (SD) and Quotas  Total Patient Load:        Clinic  A  B  C  D  Total    Load  275  392  611  724  2002    Standard Quota  5.4945  7.8322  12.2078  14.4655  40    Lower Quota  5  7  12  14  38    Fractional Part  0.4945  0.8322  0.2078  0.4655  —    Surplus Seat  +1  +1  0  0  +2    Apportionment  6  8  12  14  40      Jefferson's Method Solution (d=48)    Clinic  A  B  C  D  Total    Modified Quota  5.73  8.17  12.73  15.08  —    Apportionment  5  8  12  15  40      Adam's Method Solution (md=52)    Clinic  A  B  C  D  Total    Modified Quota  5.29  7.54  11.75  13.92  —    Apportionment  6  8  12  14  40       Apportioning Math Course Sections   Thirty sections of math courses are to be offered in introductory algebra, intermediate algebra, college algebra, and liberal arts math. The preregistration figures for the number of students planning to enroll in each section are given in the following table.    Course  Intro  Intermed  College  Lib Arts  Total    Enrollment  388  405  213  345  1351      Use Hamilton's method to determine how many sections of each course should be offered.    Use Jefferson's method with Modified divisor md = to determine how many sections of each course should be offered.    Use Adam's method with Modified divisor md = to determine how many sections of each course should be offered.      Thirty sections of math courses are to be offered based on preregistration figures.       Hamilton's Method (SD = 45.0333):    Course  Intro  Intermed  College  Lib Arts  Total    Enrollment  388  405  213  345  1351    Standard Quota  8.6158  8.9933  4.7298  7.6610  30    Lower Quota  8  8  4  7  27    Fractional Part  0.6158  0.9933  0.7298  0.6610  —    Surplus Row  0  +1  +1  +1  +3    Apportionment  8  9  5  8  30       Jefferson's Method (using ):    Course  Intro  Intermed  College  Lib Arts  Total    Mod. Quota  9.129  9.529  5.011  8.117  —    Apportionment  9  9  5  8  31 (Try Again)    Mod. Quota ( )  9.023  9.418  4.953  8.023  —    Apportionment  9  9  4  8  30       Adam's Method (using ):    Course  Intro  Intermed  College  Lib Arts  Total    Mod. Quota  8.083  8.437  4.437  7.187  —    Apportionment  9  9  5  8  31 (Try Again)    Mod. Quota ( )  7.918  8.265  4.346  7.040  —    Apportionment  8  9  5  8  30          Hamilton's Method Apportionment of 100 seats  Suppose there were four states, A, B, C ,and D with populations as shown in the table below. Suppose these four states decide to create a legislature with 100 seats. Apply Hamilton's method to determine the apportionment.     Category  State A  State B  State C  State D  Total    Population  936  2,726  2,603  3,735  10,000    Standard Quota         Lower Quota         Surplus         Apportioned Seats      100      The following table demonstrates the apportionment using Hamilton's Method with a standard divisor of .   Hamilton's Method Apportionment    Category  State A  State B  State C  State D  Total    Population  936  2,726  2,603  3,735  10,000    Standard Quota  9.36  27.26  26.03  37.35  100.00    Lower Quota  9  27  26  37  99    Fractional Part  0.36  0.26  0.03  0.35  -    Surplus  +1        Final Seats  10  27  26  37  100        The Alabama Paradox   In a fair apportionment system, adding extra seats must not result in fewer seats for any state. The Alabama Paradox occurs when the total number of available seats increases, yet one state (or more) loses seats as a result. This paradox can occur when using Hamilton's method .     Hamilton's Method Apportionment of 101 seats  Using Hamilton's method, recompute the apportionment from , if there are 101 seats instead of 100. Does the Alabama paradox occur?     States  State A  State B  State C  State D  Total    Population  936  2,726  2,603  3,735  10,000    Standard Quota         Lower Quota         Surplus         Apportioned Seats      101      The table below shows the Hamilton's Method apportionment with seats.  Note that State A loses a seat compared to the 100-seat scenario, demonstrating the Alabama Paradox.   Hamilton's Method (101 Seats)    States  State A  State B  State C  State D  Total    Population  936  2,726  2,603  3,735  10,000    Standard Quota  9.4536  27.5326  26.2903  37.7235  101.0000    Lower Quota  9  27  26  37  99    Fractional Part  0.4536  0.5326  0.2903  0.7235  -    Surplus   +1   +1     Final Seats  9  28  26  38  101       "
},
{
  "id": "section-apportionment-2",
  "level": "2",
  "url": "section-apportionment.html#section-apportionment-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Apportionment "
},
{
  "id": "def-standard-divisor",
  "level": "2",
  "url": "section-apportionment.html#def-standard-divisor",
  "type": "Definition",
  "number": "1.26",
  "title": "The Standard Divisor.",
  "body": " The Standard Divisor   The standard divisor is found by dividing the total population under consideration by the number of items to be allocated.    "
},
{
  "id": "def-standard-quota",
  "level": "2",
  "url": "section-apportionment.html#def-standard-quota",
  "type": "Definition",
  "number": "1.27",
  "title": "The Standard Quota.",
  "body": " The Standard Quota   The standard quota for a particular group is found by dividing that group's population by the standard divisor.    "
},
{
  "id": "ex-palm-springs",
  "level": "2",
  "url": "section-apportionment.html#ex-palm-springs",
  "type": "Example",
  "number": "1.28",
  "title": "",
  "body": ">  Palm Springs is composed of four states: A, B, C, and D. According to the country's constitution, the congress will have 30 seats, divided among the four states according to their respective populations. Find the standard quotas for states A, B, C, and D and complete the table below.   Population of Palm Springs by State    State  A  B  C  D  Total    Population (in thousands)  275  383  465  767  1890    Standard Quota            First, we find the Standard Divisor ( ):   Now, divide each state's population by the divisor to find the Standard Quota ( ):  State A:  State B:  State C:  State D:        State  A  B  C  D  Total    Population (in thousands)  275  383  465  767  1890    Standard Quota  4.365  6.079  7.381  12.175       "
},
{
  "id": "section-apportionment-6-1",
  "level": "2",
  "url": "section-apportionment.html#section-apportionment-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "lower quota upper quota "
},
{
  "id": "section-apportionment-6-2",
  "level": "2",
  "url": "section-apportionment.html#section-apportionment-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "satisfy the quota rule "
},
{
  "id": "method-hamilton",
  "level": "2",
  "url": "section-apportionment.html#method-hamilton",
  "type": "Algorithm",
  "number": "1.31",
  "title": "Hamilton’s Method.",
  "body": " Hamilton's Method     Calculate each group's standard quota.  Find the lower quota for each group.  Give surplus items, one at a time, to groups with the largest decimal parts until no surplus remains.     "
},
{
  "id": "ex-palm-springs-hamilton",
  "level": "2",
  "url": "section-apportionment.html#ex-palm-springs-hamilton",
  "type": "Example",
  "number": "1.32",
  "title": "",
  "body": ">  From , use Hamilton's method to apportion the 30 congressmen for Palm Springs.   Hamilton's Method Table    State A B C D Total   Population 275 383 465 767 1890  Standard Quota 4.365 6.079 7.381 12.175 30.00  Lower Quota 4 6 7 12 29  Surplus +0 +0 +1 +0 1  Apportionment 4 6 8 12 30    1. The Standard Divisor is .  2. Lower quotas sum to 29, leaving 1 surplus seat.  3. State C has the largest decimal part (.381), so it receives the surplus seat.    Following the steps of Hamilton's Method :   The sum of the Lower Quotas is . Since we must allocate 30 seats, there is surplus seat.    We look at the decimal parts of the Standard Quotas:  A:  B:  C:  D:      State C has the largest decimal part ( ), so it receives the 1 surplus seat.    Final counts: A=4, B=6, C=8, D=12.      "
},
{
  "id": "section-apportionment-9-2",
  "level": "2",
  "url": "section-apportionment.html#section-apportionment-9-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Modified divisor "
},
{
  "id": "method-jefferson",
  "level": "2",
  "url": "section-apportionment.html#method-jefferson",
  "type": "Algorithm",
  "number": "1.34",
  "title": "Jefferson’s Method.",
  "body": " Jefferson's Method   Find a modified divisor such that when each group's modified quota is rounded down ( modified lower quota ), the sum equals the number of items to be apportioned. Apportion to each group its modified lower quota.   Calculate the Standard Divisor ( ).  Calculate Standard Quotas and round down to find Lower Quotas .  If the sum of Lower Quotas is less than the total seats, choose a Modified Divisor ( ) that is smaller than the .  Recalculate quotas using and round down until the sum exactly matches the total seats.    "
},
{
  "id": "ex-palm-springs-jefferson",
  "level": "2",
  "url": "section-apportionment.html#ex-palm-springs-jefferson",
  "type": "Example",
  "number": "1.35",
  "title": "",
  "body": "  From , apportion 30 seats to Palm Springs using Jefferson's Method.    The standard divisor ( ) produced a sum of 29. For Jefferson's method, we must decrease the divisor to increase the quotas. Using a Modified Divisor of :  A:  B:  C:  D:  Sum: . State D receives the extra seat.   Jefferson's Method: Palm Springs    State A B C D Total   Population 275 383 465 767 1890  Standard Quota (SD=63) 4.365 6.079 7.381 12.175 30  Lower Quota 4 6 7 12 29  Modified Quota (MD=61) 4.508 6.279 7.623 12.574 30.98  Modified LQ (Apportionment) 4 6 7 13 30     "
},
{
  "id": "exe-bus-apportionment",
  "level": "2",
  "url": "section-apportionment.html#exe-bus-apportionment",
  "type": "Checkpoint",
  "number": "1.37",
  "title": "Apportioning 11 buses.",
  "body": " Apportioning 11 buses   Apportion 11 buses to the three towns using Jefferson's method.   Bus Apportionment Table    Town Westboro Shrewbury Worcester Total   Population 89 120 168 377  Final Apportionment            Step 1: Standard Divisor and Initial Quotas First, find the Standard Divisor: .   Trial 1: Using Standard Divisor (34.27)    Town Westboro Shrewbury Worcester Total   Population 89 120 168 377  Standard Quota 2.59 3.50 4.90 10.99  Lower Quota 2 3 4 9    The sum (9) is too low. We need 11 buses. We must decrease the divisor.    Step 2: First Modified Divisor Trial (MD = 31) Let's try a smaller divisor, .   Trial 2: Modified Divisor (31)    Town Westboro Shrewbury Worcester Total   Modified Quota 2.87 3.87 5.41 12.15  Lower Quota 2 3 5 10    The sum (10) is still too low. We must decrease the divisor further.    Step 3: Successful Modified Divisor (MD = 30) Trying .   Final Apportionment: Modified Divisor (30)    Town Westboro Shrewbury Worcester Total   Modified Quota 2.96 4.00 5.60 12.56  Modified LQ 2 4 5 11    The sum is exactly 11. Final Apportionment: Westboro: 2, Shrewbury: 4, Worcester: 5.   Bus Apportionment Work Table    Town Westboro Shrewbury Worcester Total   Population 89 120 168 377  Standard Quota 2.59 3.50 4.90 10.99  Lower Quota 2 3 4 9  Modified Quota (MD=31) 2.87 3.87 5.41 12.15  Modified LQ 2 3 5 10  Modified Quota (MD=30) 2.96 4.00 5.60 12.56  Final Apportionment 2 4 5 11     "
},
{
  "id": "method-adams",
  "level": "2",
  "url": "section-apportionment.html#method-adams",
  "type": "Algorithm",
  "number": "1.43",
  "title": "Adam’s Method.",
  "body": " Adam's Method     Find a modified divisor , , so that when each group's modified quota is the upper quota, the sum of the whole numbers for all the groups is the number of items to be apportioned. The modified quotients that are rounded up are called modified upper quota .    Apportion to each group its modified upper quota.     "
},
{
  "id": "ex-palm-springs-adam",
  "level": "2",
  "url": "section-apportionment.html#ex-palm-springs-adam",
  "type": "Example",
  "number": "1.44",
  "title": "",
  "body": "  The Palm Springs is composed of four states: A, B, C, and D. According to the country's constitution, the congress will have 30 seats, divided among the four states according to their respective populations.  Find the standard quotas for states A, B, C, and D in Palm Springs and complete the table below. Use Adam's method with a modified divisor to apportion the congressmen.   Population Data and Apportionment    State  A  B  C  D  Total    Population (1000s)  275  383  465  767  1890    Standard Quota         Upper Quota         Modified UQ         Apportionment      30       1. First, find the Standard Divisor ( ):   2. Calculate Standard Quotas ( ):  A: (Upper Quota: 5)  B: (Upper Quota: 7)  C: (Upper Quota: 8)  D: (Upper Quota: 13)  Sum of Upper Quotas = (Too many seats).  3. Since the sum is too high, we increase the divisor. Let's try :  A:  B:  C:  D:  Sum = (Too low).  4. Refined : Sums will result in A:5, B:6, C:7, D:12 = 30.  Using :    State  A  B  C  D  Total    Standard Quota ( )  4.37  6.08  7.38  12.18  30    Upper Quota  5  7  8  13  33    Mod. Quota ( )  4.14  5.76  6.99  11.53  —    Modified UQ  5  6  7  12  30     "
},
{
  "id": "ex-doctors",
  "level": "2",
  "url": "section-apportionment.html#ex-doctors",
  "type": "Checkpoint",
  "number": "1.46",
  "title": "Apportioning 7 Doctors.",
  "body": " Apportioning 7 Doctors   Apportion 7 doctors to 4 clinics using Adam's method.    Clinic  West  North  South  East  Total    Population  120  180  160  240  700    Appointment           Standard Divisor ( ) = .  The final apportionment using Adam's method with a modified divisor of md=120 is: West: 1, North: 2, South: 2, and East: 2.    Clinic  West  North  South  East  Total    Population  120  180  160  240  700    Standard Quota ( )  1.2  1.8  1.6  2.4  7    Upper Quota (Initial)  2  2  2  3  9 (Too High)    Mod. Quota ( )  1.0  1.5  1.33  2.0  —    Modified UQ (Final)  1  2  2  2  7     "
},
{
  "id": "ex-hmo",
  "level": "2",
  "url": "section-apportionment.html#ex-hmo",
  "type": "Checkpoint",
  "number": "1.47",
  "title": "Apportioning 40 HMO Doctors.",
  "body": " Apportioning 40 HMO Doctors   An HMO has 40 doctors to be apportioned among four clinics: A, B, C, and D.    Clinic  A  B  C  D    Patient Load  275  392  611  724    Apportionment              Use Hamilton's method.  Use Jefferson's method with .  Use Adam's method.      Hamilton's Method Solution  Calculate Standard Divisor (SD) and Quotas  Total Patient Load:        Clinic  A  B  C  D  Total    Load  275  392  611  724  2002    Standard Quota  5.4945  7.8322  12.2078  14.4655  40    Lower Quota  5  7  12  14  38    Fractional Part  0.4945  0.8322  0.2078  0.4655  —    Surplus Seat  +1  +1  0  0  +2    Apportionment  6  8  12  14  40      Jefferson's Method Solution (d=48)    Clinic  A  B  C  D  Total    Modified Quota  5.73  8.17  12.73  15.08  —    Apportionment  5  8  12  15  40      Adam's Method Solution (md=52)    Clinic  A  B  C  D  Total    Modified Quota  5.29  7.54  11.75  13.92  —    Apportionment  6  8  12  14  40     "
},
{
  "id": "ex-math-courses",
  "level": "2",
  "url": "section-apportionment.html#ex-math-courses",
  "type": "Checkpoint",
  "number": "1.48",
  "title": "Apportioning Math Course Sections.",
  "body": " Apportioning Math Course Sections   Thirty sections of math courses are to be offered in introductory algebra, intermediate algebra, college algebra, and liberal arts math. The preregistration figures for the number of students planning to enroll in each section are given in the following table.    Course  Intro  Intermed  College  Lib Arts  Total    Enrollment  388  405  213  345  1351      Use Hamilton's method to determine how many sections of each course should be offered.    Use Jefferson's method with Modified divisor md = to determine how many sections of each course should be offered.    Use Adam's method with Modified divisor md = to determine how many sections of each course should be offered.      Thirty sections of math courses are to be offered based on preregistration figures.       Hamilton's Method (SD = 45.0333):    Course  Intro  Intermed  College  Lib Arts  Total    Enrollment  388  405  213  345  1351    Standard Quota  8.6158  8.9933  4.7298  7.6610  30    Lower Quota  8  8  4  7  27    Fractional Part  0.6158  0.9933  0.7298  0.6610  —    Surplus Row  0  +1  +1  +1  +3    Apportionment  8  9  5  8  30       Jefferson's Method (using ):    Course  Intro  Intermed  College  Lib Arts  Total    Mod. Quota  9.129  9.529  5.011  8.117  —    Apportionment  9  9  5  8  31 (Try Again)    Mod. Quota ( )  9.023  9.418  4.953  8.023  —    Apportionment  9  9  4  8  30       Adam's Method (using ):    Course  Intro  Intermed  College  Lib Arts  Total    Mod. Quota  8.083  8.437  4.437  7.187  —    Apportionment  9  9  5  8  31 (Try Again)    Mod. Quota ( )  7.918  8.265  4.346  7.040  —    Apportionment  8  9  5  8  30        "
},
{
  "id": "ex-100-seats",
  "level": "2",
  "url": "section-apportionment.html#ex-100-seats",
  "type": "Example",
  "number": "1.49",
  "title": "Hamilton’s Method Apportionment of 100 seats.",
  "body": " Hamilton's Method Apportionment of 100 seats  Suppose there were four states, A, B, C ,and D with populations as shown in the table below. Suppose these four states decide to create a legislature with 100 seats. Apply Hamilton's method to determine the apportionment.     Category  State A  State B  State C  State D  Total    Population  936  2,726  2,603  3,735  10,000    Standard Quota         Lower Quota         Surplus         Apportioned Seats      100      The following table demonstrates the apportionment using Hamilton's Method with a standard divisor of .   Hamilton's Method Apportionment    Category  State A  State B  State C  State D  Total    Population  936  2,726  2,603  3,735  10,000    Standard Quota  9.36  27.26  26.03  37.35  100.00    Lower Quota  9  27  26  37  99    Fractional Part  0.36  0.26  0.03  0.35  -    Surplus  +1        Final Seats  10  27  26  37  100      "
},
{
  "id": "theorem-alabama-paradox",
  "level": "2",
  "url": "section-apportionment.html#theorem-alabama-paradox",
  "type": "Theorem",
  "number": "1.52",
  "title": "The Alabama Paradox.",
  "body": " The Alabama Paradox   In a fair apportionment system, adding extra seats must not result in fewer seats for any state. The Alabama Paradox occurs when the total number of available seats increases, yet one state (or more) loses seats as a result. This paradox can occur when using Hamilton's method .   "
},
{
  "id": "ex-101-seats",
  "level": "2",
  "url": "section-apportionment.html#ex-101-seats",
  "type": "Example",
  "number": "1.53",
  "title": "Hamilton’s Method Apportionment of 101 seats.",
  "body": " Hamilton's Method Apportionment of 101 seats  Using Hamilton's method, recompute the apportionment from , if there are 101 seats instead of 100. Does the Alabama paradox occur?     States  State A  State B  State C  State D  Total    Population  936  2,726  2,603  3,735  10,000    Standard Quota         Lower Quota         Surplus         Apportioned Seats      101      The table below shows the Hamilton's Method apportionment with seats.  Note that State A loses a seat compared to the 100-seat scenario, demonstrating the Alabama Paradox.   Hamilton's Method (101 Seats)    States  State A  State B  State C  State D  Total    Population  936  2,726  2,603  3,735  10,000    Standard Quota  9.4536  27.5326  26.2903  37.7235  101.0000    Lower Quota  9  27  26  37  99    Fractional Part  0.4536  0.5326  0.2903  0.7235  -    Surplus   +1   +1     Final Seats  9  28  26  38  101      "
},
{
  "id": "sec-voting-ch-ex",
  "level": "1",
  "url": "sec-voting-ch-ex.html",
  "type": "Section",
  "number": "",
  "title": "1.3 Chapter Exercises",
  "body": " 1.3 Chapter Exercises   Voting and Apportionment Practice Problems    The city council gave a questionnaire to its citizens, asking them their priorities for next year's budget: (P)olice, (R)oads, (S)chools, and (T)rash removal.    Preference  15  30  18  17  2    1st  P  T  P  R  R    2nd  R  R  S  T  S    3rd  S  S  T  S  P    4th  T  P  R  P  T     Which option is selected using the plurality method?  Which option is selected using the plurality-with-elimination method?  Which option is selected using the Borda count method?  Which option is selected using the pairwise comparison method?        Plurality Method: Count only first-place votes.   P:  T:  R:  S:   Winner: Police (P) with 33 votes.     Plurality-with-Elimination:   Round 1: S has 0 votes. Eliminate S.   Preference  15  30  18  17  2    1st  P  T  P  R  R    2nd  R  R  T  T  P    3rd  T  P  R  P  T     Round 2: R has the fewest 1st place votes (19). Eliminate R. The 17 votes from (R, T, S, P) move to T. The 2 votes from (R, S, P, T) move to P.   Preference  15  30  18  17  2    1st  P  T  P  T  P    2nd  T  P  T  P  T   New totals: P: ; T: .  Winner: Trash Removal (T) .    Borda Count: 1st = 4pts, 2nd = 3pts, 3rd = 2pts, 4th = 1pt.   P:  R:  S:  T:   Winner: Roads (R) with 229 points.     Pairwise Comparison:   P vs R: P=33, R=49. (R wins)  P vs S: P=63, S=19. (P wins)  P vs T: P=35, T=47. (T wins)  R vs S: R=64, S=18. (R wins)  R vs T: R=52, T=30. (R wins)  S vs T: S=35, T=47. (T wins)  R has 3 wins, T has 2 wins, P has 1 win. Winner: Roads (R) .         The preference table shows the results of an election among three candidates, A, B, and C.    Number of votes  7  6  3    1st choice  A  B  C    2nd choice  B  C  B    3rd choice  C  A  A      Using the plurality method, who is the winner?  Is the Majority satisfied?  Is the Condorcet satisfied?      Total votes: . Votes needed for a majority: , so votes are required.      Plurality Method: Count only 1st choice votes:  A: 7 votes  B: 6 votes  C: 3 votes  The winner is Candidate A .     Majority Criterion: A candidate must have more than 50% of the first-place votes to be a majority winner. Since the leader (A) has only 7 votes and 9 were needed for a majority, there is no majority winner. The criterion is satisfied (vacuously) because the criterion only says \"if a majority winner exists, they must win.\" Since none exists, the rule isn't broken.     Condorcet Criterion: We check if the plurality winner (A) is also the Condorcet winner by doing pairwise comparisons:  A vs B: A is preferred by 7 voters; B is preferred by voters. B wins.  B vs C: B is preferred by voters; C is preferred by 6 voters. B wins.  A vs C: A is preferred by 7 voters; C is preferred by voters. C wins.  Candidate B wins all head-to-head matches and is the Condorcet Winner . Since the plurality method chose A instead of B, the Condorcet Criterion is not satisfied in this election.         The preference table shows the results of an election among three candidates, A, B, and C.    Number of votes  10  4  2    1st choice  A  B  C    2nd choice  B  C  B    3rd choice  C  A  A      Using the plurality-with-elimination method, who is the winner?  Is the Majority satisfied?   In the actual election, the 2 voters in the last column who voted C, B, and A, change their vote to A, B, C. Using the plurality-with-elimination method, which candidate wins the actual election?       Total votes: . Majority needed: votes.      Plurality-with-Elimination:   Round 1: A has 10 votes, B has 4, and C has 2. Since A has 10 votes (more than the majority of 9), A is the winner immediately.  Winner: Candidate A .     Majority: Yes. Candidate A has a majority of first-place votes (10 out of 16) and won the election. Therefore, the Majority is satisfied .     Changed Election: If the 2 voters for C change to A, the new totals are:  A: votes  B: 4 votes  C: 0 votes  Winner: Candidate A .         If a candidate wins all pairwise comparisons with other candidates, that candidate is called the Condorcet winner .  The mathematics department is hiring a new faculty member and the five-person hiring committee has interviewed four candidates: Adam(A), Beth(B), Carol(C), and Dan(D). They have decided to use Condorcet's method on their five ballots. Who gets the offer?    Choice  Voter 1  Voter 2  Voter 3  Voter 4  Voter 5    First  B  D  C  D  B    Second  A  B  A  A  A    Third  C  C  B  C  D    Fourth  D  A  D  B  C      To find the Condorcet winner, we must compare each candidate head-to-head. There are 5 voters, so 3 votes are needed to win a comparison.     A vs. B:  Voter 1: B, Voter 2: B, Voter 3: A, Voter 4: A, Voter 5: B.  Result: B wins 3 to 2.    A vs. C:  Voter 1: A, Voter 2: C, Voter 3: C, Voter 4: A, Voter 5: A.  Result: A wins 3 to 2.    A vs. D:  Voter 1: A, Voter 2: D, Voter 3: A, Voter 4: D, Voter 5: A.  Result: A wins 3 to 2.    B vs. C:  Voter 1: B, Voter 2: B, Voter 3: C, Voter 4: C, Voter 5: B.  Result: B wins 3 to 2.    B vs. D:  Voter 1: B, Voter 2: D, Voter 3: B, Voter 4: D, Voter 5: B.  Result: B wins 3 to 2.    C vs. D:  Voter 1: C, Voter 2: D, Voter 3: C, Voter 4: D, Voter 5: D.  Result: D wins 3 to 2.      Summary of Wins:   Beth (B) won 3 comparisons (vs. A, C, and D).  Adam (A) won 2 comparisons (vs. C and D).  Dan (D) won 1 comparison (vs. C).  Carol (C) won 0 comparisons.    Since Beth (B) won every head-to-head match, she is the Condorcet winner and gets the offer.      A small city has 30 police officers to be apportioned among 4 precincts based on the population of each precinct. The populations are given in the following table.    Precinct  1  2  3  4  Total    Population  3117  1883  2776  3174  10,950      Find the standard divisor.  Find the standard quota for each precinct.  Find the modified quota for the fourth precinct using Jefferson's method with a modified divisor of 350.  Find the apportionment for the second precinct using Adams's method with a modified divisor of 380.       Part (a) & (b): Standard Divisor and Standard Quotas   The Standard Divisor ( ) is .   Hamilton's Method (Standard Quotas)    Category  Precinct 1  Precinct 2  Precinct 3  Precinct 4  Total    Population  3117  1883  2776  3174  10,950    Std. Quota  8.54  5.16  7.61  8.70  30.00    Lower Quota  8  5  7  8  28    Fraction  0.54  0.16  0.61  0.70  -    Surplus    +1  +1     Hamilton Final  8  5  8  9  30      Part (c): Jefferson's Method (Modified Divisor )    Jefferson's Method Calculation    Category  Precinct 1  Precinct 2  Precinct 3  Precinct 4  Total    Mod. Quota  8.91  5.38  7.93  9.07  -    Jefferson Apport.  8  5  7  9  29     The modified quota for the fourth precinct is 9.07 .   Part (d): Adams's Method (Modified Divisor )    Adams's Method Calculation    Category  Precinct 1  Precinct 2  Precinct 3  Precinct 4  Total    Mod. Quota  8.20  4.96  7.31  8.35  -    Adams Apport.  9  5  8  9  31     The apportionment for the second precinct using Adams's method is 5 officers.      A mother has an incentive program to get her five children to read more. She has 30 pieces of candy to divide among her children at the end of the week based on the number of minutes each of them spends reading.    Child  Abby  Bobby  Charli  Dave  Eddie  Total    Reading Times  138  142  188  218  64  750      Use Hamilton's method to apportion 30 pieces of candy.  At the last minute, the mother finds another piece of candy and does the apportionment again. Now, she has 31 pieces of candy to divide among her children at the end of the week based on the number of minutes each of them spends reading. Use Hamilton's method to apportion the candy among the children.  Look at your answers for parts (a) and (b). What changed and why? Why is the change interesting?This is an example of which paradox?      Part (a): 30 Pieces (Standard Divisor = 25)   Apportionment for 30 Pieces    Category  Abby  Bobby  Charli  Dave  Eddie  Total    Reading Min  138  142  188  218  64  750    Std. Quota  5.52  5.68  7.52  8.72  2.56  30.00    Lower Quota  5  5  7  8  2  27    Fraction  0.52  0.68  0.52  0.72  0.56  -    Surplus   +1   +1  +1     Final Seats  5  6  7  9  3  30     Part (b): 31 Pieces (Standard Divisor = 24.1935)   Apportionment for 31 Pieces    Category  Abby  Bobby  Charli  Dave  Eddie  Total    Reading Min  138  142  188  218  64  750    Std. Quota  5.704  5.870  7.771  9.011  2.645  31.00    Lower Quota  5  5  7  9  2  28    Fraction  0.704  0.870  0.771  0.011  0.645  -    Surplus  +1  +1  +1       Final Seats  6  6  8  9  2  31     Part (c): Increasing the total number of items from 30 to 31 creates the Alabama Paradox . In this specific case, Eddie loses a candy even though the total amount of candy increased.     "
},
{
  "id": "sec-voting-ch-ex-2-2",
  "level": "2",
  "url": "sec-voting-ch-ex.html#sec-voting-ch-ex-2-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  The city council gave a questionnaire to its citizens, asking them their priorities for next year's budget: (P)olice, (R)oads, (S)chools, and (T)rash removal.    Preference  15  30  18  17  2    1st  P  T  P  R  R    2nd  R  R  S  T  S    3rd  S  S  T  S  P    4th  T  P  R  P  T     Which option is selected using the plurality method?  Which option is selected using the plurality-with-elimination method?  Which option is selected using the Borda count method?  Which option is selected using the pairwise comparison method?        Plurality Method: Count only first-place votes.   P:  T:  R:  S:   Winner: Police (P) with 33 votes.     Plurality-with-Elimination:   Round 1: S has 0 votes. Eliminate S.   Preference  15  30  18  17  2    1st  P  T  P  R  R    2nd  R  R  T  T  P    3rd  T  P  R  P  T     Round 2: R has the fewest 1st place votes (19). Eliminate R. The 17 votes from (R, T, S, P) move to T. The 2 votes from (R, S, P, T) move to P.   Preference  15  30  18  17  2    1st  P  T  P  T  P    2nd  T  P  T  P  T   New totals: P: ; T: .  Winner: Trash Removal (T) .    Borda Count: 1st = 4pts, 2nd = 3pts, 3rd = 2pts, 4th = 1pt.   P:  R:  S:  T:   Winner: Roads (R) with 229 points.     Pairwise Comparison:   P vs R: P=33, R=49. (R wins)  P vs S: P=63, S=19. (P wins)  P vs T: P=35, T=47. (T wins)  R vs S: R=64, S=18. (R wins)  R vs T: R=52, T=30. (R wins)  S vs T: S=35, T=47. (T wins)  R has 3 wins, T has 2 wins, P has 1 win. Winner: Roads (R) .      "
},
{
  "id": "sec-voting-ch-ex-2-3",
  "level": "2",
  "url": "sec-voting-ch-ex.html#sec-voting-ch-ex-2-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  The preference table shows the results of an election among three candidates, A, B, and C.    Number of votes  7  6  3    1st choice  A  B  C    2nd choice  B  C  B    3rd choice  C  A  A      Using the plurality method, who is the winner?  Is the Majority satisfied?  Is the Condorcet satisfied?      Total votes: . Votes needed for a majority: , so votes are required.      Plurality Method: Count only 1st choice votes:  A: 7 votes  B: 6 votes  C: 3 votes  The winner is Candidate A .     Majority Criterion: A candidate must have more than 50% of the first-place votes to be a majority winner. Since the leader (A) has only 7 votes and 9 were needed for a majority, there is no majority winner. The criterion is satisfied (vacuously) because the criterion only says \"if a majority winner exists, they must win.\" Since none exists, the rule isn't broken.     Condorcet Criterion: We check if the plurality winner (A) is also the Condorcet winner by doing pairwise comparisons:  A vs B: A is preferred by 7 voters; B is preferred by voters. B wins.  B vs C: B is preferred by voters; C is preferred by 6 voters. B wins.  A vs C: A is preferred by 7 voters; C is preferred by voters. C wins.  Candidate B wins all head-to-head matches and is the Condorcet Winner . Since the plurality method chose A instead of B, the Condorcet Criterion is not satisfied in this election.      "
},
{
  "id": "sec-voting-ch-ex-2-4",
  "level": "2",
  "url": "sec-voting-ch-ex.html#sec-voting-ch-ex-2-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  The preference table shows the results of an election among three candidates, A, B, and C.    Number of votes  10  4  2    1st choice  A  B  C    2nd choice  B  C  B    3rd choice  C  A  A      Using the plurality-with-elimination method, who is the winner?  Is the Majority satisfied?   In the actual election, the 2 voters in the last column who voted C, B, and A, change their vote to A, B, C. Using the plurality-with-elimination method, which candidate wins the actual election?       Total votes: . Majority needed: votes.      Plurality-with-Elimination:   Round 1: A has 10 votes, B has 4, and C has 2. Since A has 10 votes (more than the majority of 9), A is the winner immediately.  Winner: Candidate A .     Majority: Yes. Candidate A has a majority of first-place votes (10 out of 16) and won the election. Therefore, the Majority is satisfied .     Changed Election: If the 2 voters for C change to A, the new totals are:  A: votes  B: 4 votes  C: 0 votes  Winner: Candidate A .      "
},
{
  "id": "sec-voting-ch-ex-2-5",
  "level": "2",
  "url": "sec-voting-ch-ex.html#sec-voting-ch-ex-2-5",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  If a candidate wins all pairwise comparisons with other candidates, that candidate is called the Condorcet winner .  The mathematics department is hiring a new faculty member and the five-person hiring committee has interviewed four candidates: Adam(A), Beth(B), Carol(C), and Dan(D). They have decided to use Condorcet's method on their five ballots. Who gets the offer?    Choice  Voter 1  Voter 2  Voter 3  Voter 4  Voter 5    First  B  D  C  D  B    Second  A  B  A  A  A    Third  C  C  B  C  D    Fourth  D  A  D  B  C      To find the Condorcet winner, we must compare each candidate head-to-head. There are 5 voters, so 3 votes are needed to win a comparison.     A vs. B:  Voter 1: B, Voter 2: B, Voter 3: A, Voter 4: A, Voter 5: B.  Result: B wins 3 to 2.    A vs. C:  Voter 1: A, Voter 2: C, Voter 3: C, Voter 4: A, Voter 5: A.  Result: A wins 3 to 2.    A vs. D:  Voter 1: A, Voter 2: D, Voter 3: A, Voter 4: D, Voter 5: A.  Result: A wins 3 to 2.    B vs. C:  Voter 1: B, Voter 2: B, Voter 3: C, Voter 4: C, Voter 5: B.  Result: B wins 3 to 2.    B vs. D:  Voter 1: B, Voter 2: D, Voter 3: B, Voter 4: D, Voter 5: B.  Result: B wins 3 to 2.    C vs. D:  Voter 1: C, Voter 2: D, Voter 3: C, Voter 4: D, Voter 5: D.  Result: D wins 3 to 2.      Summary of Wins:   Beth (B) won 3 comparisons (vs. A, C, and D).  Adam (A) won 2 comparisons (vs. C and D).  Dan (D) won 1 comparison (vs. C).  Carol (C) won 0 comparisons.    Since Beth (B) won every head-to-head match, she is the Condorcet winner and gets the offer.   "
},
{
  "id": "sec-voting-ch-ex-2-6",
  "level": "2",
  "url": "sec-voting-ch-ex.html#sec-voting-ch-ex-2-6",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  A small city has 30 police officers to be apportioned among 4 precincts based on the population of each precinct. The populations are given in the following table.    Precinct  1  2  3  4  Total    Population  3117  1883  2776  3174  10,950      Find the standard divisor.  Find the standard quota for each precinct.  Find the modified quota for the fourth precinct using Jefferson's method with a modified divisor of 350.  Find the apportionment for the second precinct using Adams's method with a modified divisor of 380.       Part (a) & (b): Standard Divisor and Standard Quotas   The Standard Divisor ( ) is .   Hamilton's Method (Standard Quotas)    Category  Precinct 1  Precinct 2  Precinct 3  Precinct 4  Total    Population  3117  1883  2776  3174  10,950    Std. Quota  8.54  5.16  7.61  8.70  30.00    Lower Quota  8  5  7  8  28    Fraction  0.54  0.16  0.61  0.70  -    Surplus    +1  +1     Hamilton Final  8  5  8  9  30      Part (c): Jefferson's Method (Modified Divisor )    Jefferson's Method Calculation    Category  Precinct 1  Precinct 2  Precinct 3  Precinct 4  Total    Mod. Quota  8.91  5.38  7.93  9.07  -    Jefferson Apport.  8  5  7  9  29     The modified quota for the fourth precinct is 9.07 .   Part (d): Adams's Method (Modified Divisor )    Adams's Method Calculation    Category  Precinct 1  Precinct 2  Precinct 3  Precinct 4  Total    Mod. Quota  8.20  4.96  7.31  8.35  -    Adams Apport.  9  5  8  9  31     The apportionment for the second precinct using Adams's method is 5 officers.   "
},
{
  "id": "sec-voting-ch-ex-2-7",
  "level": "2",
  "url": "sec-voting-ch-ex.html#sec-voting-ch-ex-2-7",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  A mother has an incentive program to get her five children to read more. She has 30 pieces of candy to divide among her children at the end of the week based on the number of minutes each of them spends reading.    Child  Abby  Bobby  Charli  Dave  Eddie  Total    Reading Times  138  142  188  218  64  750      Use Hamilton's method to apportion 30 pieces of candy.  At the last minute, the mother finds another piece of candy and does the apportionment again. Now, she has 31 pieces of candy to divide among her children at the end of the week based on the number of minutes each of them spends reading. Use Hamilton's method to apportion the candy among the children.  Look at your answers for parts (a) and (b). What changed and why? Why is the change interesting?This is an example of which paradox?      Part (a): 30 Pieces (Standard Divisor = 25)   Apportionment for 30 Pieces    Category  Abby  Bobby  Charli  Dave  Eddie  Total    Reading Min  138  142  188  218  64  750    Std. Quota  5.52  5.68  7.52  8.72  2.56  30.00    Lower Quota  5  5  7  8  2  27    Fraction  0.52  0.68  0.52  0.72  0.56  -    Surplus   +1   +1  +1     Final Seats  5  6  7  9  3  30     Part (b): 31 Pieces (Standard Divisor = 24.1935)   Apportionment for 31 Pieces    Category  Abby  Bobby  Charli  Dave  Eddie  Total    Reading Min  138  142  188  218  64  750    Std. Quota  5.704  5.870  7.771  9.011  2.645  31.00    Lower Quota  5  5  7  9  2  28    Fraction  0.704  0.870  0.771  0.011  0.645  -    Surplus  +1  +1  +1       Final Seats  6  6  8  9  2  31     Part (c): Increasing the total number of items from 30 to 31 creates the Alabama Paradox . In this specific case, Eddie loses a candy even though the total amount of candy increased.   "
},
{
  "id": "notes-simple-interest",
  "level": "1",
  "url": "notes-simple-interest.html",
  "type": "Section",
  "number": "",
  "title": "2.1 Understanding Interest: Simple Interest",
  "body": " 2.1 Understanding Interest: Simple Interest  Interest is the dollar amount that we get paid for lending money or pay for borrowing money. When we deposit money in a financial institution, the institution pays us interest for its use. When we borrow money, interest is the price we pay for the privilege of using the money until we repay it.   Simple Interest   The amount of money that we deposit or borrow is called the principal . The amount of interest depends on the principal, the interest rate , which is given as a percent and various from bank to bank, and the length of time for which the money is deposited. Simple interest involves interest calculated only on the principal .     The rate, , is expressed as a decimal when you calculating simple interest.    Calculating Simple interest for a year  You deposit $2,000 in a savings account, which has a rate 6.0%. Find the interest at the end of the first year.   We can use the formula for simple interest to find the interest at the end of the first year.       Calculating Simple interest for more than a year  A student took out a simple interest loan for $1,300 for two years at a rate of 7.5%to purchase a used car. What is the interest on the loan?   We can use the formula for simple interest to find the interest on the loan.      When a loan is repaid, the interest is added to the original principal to find the total amount due. In , at the end of 2 years the student will have to repay.     In general, after t years the amount due, A, can be determined as follows:    Future Value    Future value = Principal + Interest : The amount due, , is called the future value of the loan. The principal borrowed is also known as the loan's present value .      Calculating Future Value  What is the future value of a $1,000 loan at 5% for 3 years?   We can use the formula for future value to find the amount due at the end of 3 years.       Determining a simple interest rate  You borrow $2,500 from a friend and promise to pay back $2,655 in six months. What simple interest rate will you pay?   We can use the formula for future value to find the interest rate.      Determining a present value  How much should you put an investment paying a simple interest rate of 8.0% if you need $3000 in six months?   We can use the formula for future value to find the present value.      Exercises for Practice   Calculating a simple interest rate for a T-bill   Treasury bills (T-bills) can be purchased from the U.S. Treasury Department. You buy a T-bill for $981.60 that pays $1,000 in 13 weeks. What simple interest rate, to the nearest tenth of a percent, does this T-bill earn?    We can use the formula for future value to find the interest rate.      Calculating a present value for a CD   A bank offers a CD that pays a simple interest rate of 4.5%. How much must you put in this CD now in order to have $8,000 for a kitchen remodeling project in two years? Round up to the nearest cent.     We can use the formula for future value to find the present value.       Calculating a future value for a savings account   You deposit $1,000 in a savings account at a bank that has a rate of 1.95%. Find a future value at the end of 5 years.     We can use the formula for future value to find the amount due at the end of 5 years.        Determining whether a statement makes sense or not, explain your reasoning.     After depositing $1,500 in an account at a rate of 4%, my balance at the end of the first year was     I planned to save $5,000 in four years, computed the present value to be $3,846.153, so I round the principal to $3,846.15.        This statement does not make sense because the balance at the end of the first year should be the future value, which is the sum of the principal and interest. The correct balance should be     This makes sense. In fact, rounding down is the safer move here. Rounding Down ($3,846.15): By starting with slightly less than the exact \"perfect\" number, you technically might end up a fraction of a cent short of your $5,000 goal after four years. However, in practice, this is unlikely to be a significant issue, and it provides a small buffer to ensure you meet your target.       "
},
{
  "id": "definition-simple-interest",
  "level": "2",
  "url": "notes-simple-interest.html#definition-simple-interest",
  "type": "Definition",
  "number": "2.1",
  "title": "Simple Interest.",
  "body": " Simple Interest   The amount of money that we deposit or borrow is called the principal . The amount of interest depends on the principal, the interest rate , which is given as a percent and various from bank to bank, and the length of time for which the money is deposited. Simple interest involves interest calculated only on the principal .     The rate, , is expressed as a decimal when you calculating simple interest.  "
},
{
  "id": "example-S1",
  "level": "2",
  "url": "notes-simple-interest.html#example-S1",
  "type": "Example",
  "number": "2.2",
  "title": "Calculating Simple interest for a year.",
  "body": " Calculating Simple interest for a year  You deposit $2,000 in a savings account, which has a rate 6.0%. Find the interest at the end of the first year.   We can use the formula for simple interest to find the interest at the end of the first year.     "
},
{
  "id": "example-S2",
  "level": "2",
  "url": "notes-simple-interest.html#example-S2",
  "type": "Example",
  "number": "2.3",
  "title": "Calculating Simple interest for more than a year.",
  "body": " Calculating Simple interest for more than a year  A student took out a simple interest loan for $1,300 for two years at a rate of 7.5%to purchase a used car. What is the interest on the loan?   We can use the formula for simple interest to find the interest on the loan.     "
},
{
  "id": "definition-future-value",
  "level": "2",
  "url": "notes-simple-interest.html#definition-future-value",
  "type": "Definition",
  "number": "2.4",
  "title": "Future Value.",
  "body": " Future Value    Future value = Principal + Interest : The amount due, , is called the future value of the loan. The principal borrowed is also known as the loan's present value .    "
},
{
  "id": "example-S3",
  "level": "2",
  "url": "notes-simple-interest.html#example-S3",
  "type": "Example",
  "number": "2.5",
  "title": "Calculating Future Value.",
  "body": " Calculating Future Value  What is the future value of a $1,000 loan at 5% for 3 years?   We can use the formula for future value to find the amount due at the end of 3 years.     "
},
{
  "id": "example-S4",
  "level": "2",
  "url": "notes-simple-interest.html#example-S4",
  "type": "Example",
  "number": "2.6",
  "title": "Determining a simple interest rate.",
  "body": " Determining a simple interest rate  You borrow $2,500 from a friend and promise to pay back $2,655 in six months. What simple interest rate will you pay?   We can use the formula for future value to find the interest rate.    "
},
{
  "id": "example-S5",
  "level": "2",
  "url": "notes-simple-interest.html#example-S5",
  "type": "Example",
  "number": "2.7",
  "title": "Determining a present value.",
  "body": " Determining a present value  How much should you put an investment paying a simple interest rate of 8.0% if you need $3000 in six months?   We can use the formula for future value to find the present value.    "
},
{
  "id": "practice-simple-interest-2",
  "level": "2",
  "url": "notes-simple-interest.html#practice-simple-interest-2",
  "type": "Exercise",
  "number": "1",
  "title": "Calculating a simple interest rate for a T-bill.",
  "body": " Calculating a simple interest rate for a T-bill   Treasury bills (T-bills) can be purchased from the U.S. Treasury Department. You buy a T-bill for $981.60 that pays $1,000 in 13 weeks. What simple interest rate, to the nearest tenth of a percent, does this T-bill earn?    We can use the formula for future value to find the interest rate.    "
},
{
  "id": "practice-simple-interest-3",
  "level": "2",
  "url": "notes-simple-interest.html#practice-simple-interest-3",
  "type": "Exercise",
  "number": "2",
  "title": "Calculating a present value for a CD.",
  "body": " Calculating a present value for a CD   A bank offers a CD that pays a simple interest rate of 4.5%. How much must you put in this CD now in order to have $8,000 for a kitchen remodeling project in two years? Round up to the nearest cent.     We can use the formula for future value to find the present value.     "
},
{
  "id": "practice-simple-interest-4",
  "level": "2",
  "url": "notes-simple-interest.html#practice-simple-interest-4",
  "type": "Exercise",
  "number": "3",
  "title": "Calculating a future value for a savings account.",
  "body": " Calculating a future value for a savings account   You deposit $1,000 in a savings account at a bank that has a rate of 1.95%. Find a future value at the end of 5 years.     We can use the formula for future value to find the amount due at the end of 5 years.      "
},
{
  "id": "practice-simple-interest-5",
  "level": "2",
  "url": "notes-simple-interest.html#practice-simple-interest-5",
  "type": "Exercise",
  "number": "4",
  "title": "Determining whether a statement makes sense or not, explain your reasoning..",
  "body": " Determining whether a statement makes sense or not, explain your reasoning.     After depositing $1,500 in an account at a rate of 4%, my balance at the end of the first year was     I planned to save $5,000 in four years, computed the present value to be $3,846.153, so I round the principal to $3,846.15.        This statement does not make sense because the balance at the end of the first year should be the future value, which is the sum of the principal and interest. The correct balance should be     This makes sense. In fact, rounding down is the safer move here. Rounding Down ($3,846.15): By starting with slightly less than the exact \"perfect\" number, you technically might end up a fraction of a cent short of your $5,000 goal after four years. However, in practice, this is unlikely to be a significant issue, and it provides a small buffer to ensure you meet your target.     "
},
{
  "id": "notes-compound-interest",
  "level": "1",
  "url": "notes-compound-interest.html",
  "type": "Section",
  "number": "",
  "title": "2.2 Saving Money: Compound Interest",
  "body": " 2.2 Saving Money: Compound Interest  In 1626, Peter Minuit convinced the wrappinger Indians to sell him Manhattan Island for $24. If the native American had put the $24 into a bank account at a 5% interest rate compound annually, by the year 2021 there would be well over $5.6 billion in the account!  So, how did the present value of Manhattan in 1626 attain a future value of over $5.6 billion in 2021, 395 years at 5% simple interest is or $498.00 compared to over $5.6 billion.   Compound Interest vs. Simple Interest  The difference between simple interest and compound interest is that simple interest is calculated only on the original principal, while compound interest is calculated on the original principal and any accumulated interest.   Compound interest is interest computed on the original principal as well as on any accumulated interest.   For example, suppose you deposit $1,000 in a savings account at a rate of 5%. Following table shows how the investment grows.  Calculating Compound interest for a year.   Compound Interest Growth of $1000 in a savings account at a rate of 5%    Year  Beginning Balance ($)  Interest Earned:  New Balance($)    1  $1,000.00   $1,050.00    2  $1,050.00   $1,102.50    3  $1,102.50   $1,157.63    4  $1,157.63   $1,215.51    5  $1,215.51      6        The fast way to determine the amount, in the account subject to compound interest is the following formula. If dollars are deposited at rate , in decimal form, subject to compound interest, then the amount, , of money in the account after t years is given by   Compound Interest Paid Once a Year   Calculating the amount in an account for compound interest paid once year:  where the amount is the account's future value and the principal is its present value .     Calculating Compound interest for a year  You deposit $2,000 in a savings account, which has a rate 6%. Find the amount, A, of money in the account after 3 years subject to compound interest and find the interest.   To find the amount after 3 years, we use the compound interest formula   where , , and .  Substituting the values:   The interest earned is calculated as:     Calculating the amount in an account for compound interest paid more than once a year. The period of time between two interest payments is called the compounding period .  If compound interest is paid once a year, the compounding period is one year. We say the interest is compounded annually .  If compound interest is paid twice a year, the compounding period is six months. We say the interest is compounded semiannually .  If compound interest is paid four times a year, the compounding period is three months. We say the interest is compounded quarterly .  If compound interest is paid every month of a year, the compounding period is twelve months. We say the interest is compounded monthly .  In general, if compound interest is paid n times per year, we say the interest is n compounding periods per year .   Compound interest: Future Value   If dollars are deposited at rate , in decimal form, subject to compound interest paid n times per year, then the amount, , of money in the account after t years is given by   where the amount is the account's future value and the principal is its present value .     Calculating Compound Interest for More Than a Year   You deposit $7,500 in a savings account that has a rate of 6%. The interest is compounded monthly. How much money will you have after five years? Find the interest after five years.    To find the future value of the account, we use the compound interest formula:   Given , , , and :   The account balance after five years is approximately $10,116.38. The interest earned over five years is:   The interest earned is $2,616.38.     Compound Interest: Present Value   If dollars are to be accumulated in years in an account that pays rate compounded times per year, then the present value, , that needs to be invested now is given by      Calculating present value  How much money should be deposited in an account today that earns 8% compounded monthly so that it will accumulate to $20,000 in five years?   To find the required deposit (Present Value), we use the formula: where:  (Future Value)  (Annual interest rate)  (Compounding periods per year)  (Time in years)    Substituting these values into the formula gives:   Therefore, a deposit of is required today.    The annual percentage yield (APY), or the effective interest rate , is the simple interest rate that produces the same amount of money in an account at the end of one year as when the account is subject to compound interest at a stated rate.   Annual percentage yield (APY)   Suppose that an investment has a nominal interest rate, , in decimal form, and pays compound interest times per year. The investment's effective annual yields , APY, is given by      Understanding effective annual yield  You deposit $4000 in an account that pays 8% interest compounded monthly. Use the future value formula for simple interest to determine the effective annual yield.   By the formula for future value Rounded to nearest cent, the amount in the savings account after one year in $4332.00.  The effective annual yield is a simple interest rate. We use the future value formula for simple interest to determine the simple interest rate that produces a future value of $4332 for $4000 deposit after one year.   You will pay a simple interest rate of 8.3%. This means that money invested at 8.3% simple interest earns the same amount in one year as money invested at 8%interest compounded monthly.     Calculating Effective Annual Yield   A passbook savings account has a nominal rate of . The interest is compounded daily. Find the account's effective annual yield, assuming a -day year.    The Effective Yield (APY) represents the actual interest earned in one year. It is calculated using the formula: where:  (Nominal annual interest rate)  (Compounding periods per year)    Substituting the given values:   Converted to a percentage, the effective annual yield is approximately .     Quarterly Compounding and Interest Calculation   You deposit in a savings account at a bank that has a rate of . The interest is compounded quarterly.   How much money will you have after ten years? Round up to the nearest cent.    Find the interest.       First, we identify the variables for the compound interest formula:  (Principal)  (Annual rate)  (Quarterly compounding)  (Years)    For part (a), we calculate the future value ( ): Rounding up, the account balance will be .  For part (b), we find the interest earned ( ) by subtracting the principal from the future value: The interest earned is .     Comparing Investment Options   Suppose that you have to invest. Which investment yields the greater return over 5 years: compounded quarterly or compounded semiannually?    To determine which investment is superior, we calculate the future value ( ) for both options using the formula , where and .     Option 1: compounded quarterly  Here, and .     Option 2: compounded semiannually  Here, and .      Comparing the two totals, Option 1 results in while Option 2 results in .  Therefore, the investment compounded quarterly yields the greater return by .     Present Value with Quarterly Compounding   How much money should be deposited today in an account that earns compounded quarterly so that it will accumulate to in ten years?    To find the required initial deposit, we use the Present Value formula: where:  (The target future value)  (The annual interest rate)  (Compounded quarterly)  (The time in years)    Substituting these values into the formula:   Therefore, a deposit of is required today to reach the goal of in ten years.      Exercises for Practice   Calculating Effective Annual Yield   You deposit in an account that pays interest compounded monthly. Determine the effective annual yield.    The Effective Annual Yield (APY) is the actual annual rate of return and is independent of the principal amount deposited. We use the formula: where:  (Nominal annual interest rate)  (Compounding periods per year)    Substituting these values:   Converted to a percentage and rounded to two decimal places, the effective annual yield is .     Future Value for a Long-Term Investment   At the time of her grandson's birth, a grandmother deposits in an account that pays compounded monthly. What will be the value of the account at the child's twenty-first birthday, assuming that no other deposits or withdrawals are made during this period?    To find the future value of the account, we use the compound interest formula: where:  (Initial deposit)  (Annual interest rate)  (Compounding periods per year)  (Time in years until the 21st birthday)    Substituting these values into the formula:   On the child's twenty-first birthday, the account will be worth .     Interest Rate Concepts: True or False   Determine whether each statement is True or False and explain your reasoning.   My bank provides simple interest at per year, but I cannot determine if this is a better deal than a competing bank offering compound interest without knowing the compounding period.    My bank advertises a compound interest rate of , although, without making deposits or withdrawals, the balance in my account increased by in one year.           False. Any amount of compounding is better than simple interest when the nominal rates are identical (and greater than zero). While the compounding period determines how much better the deal is, we already know compound interest will yield more than simple interest regardless of whether it is compounded annually, monthly, or daily.     True. The advertised rate is the nominal rate ( ), but the increase represents the Effective Annual Yield . Because interest is added to the balance throughout the year, the actual growth is slightly higher than the nominal rate. For example, compounded monthly results in an effective yield of approximately .        Quarterly Compounding vs. Simple Interest   A sum of is invested at an annual rate of . Find the balance in the account after 5 years subject to:   quarterly compounding    simple interest       We are given , , and .     Quarterly Compounding  Using the formula with : The balance with quarterly compounding is .    Simple Interest  Using the formula : The balance with simple interest is .     Quarterly compounding results in an additional compared to simple interest.     Future Value and Effective Yield   You deposit in an account that pays interest compounded monthly.   Find the future value after one year.    Determine the effective annual yield.       Given: , , , and .     To find the future value ( ) after one year: The future value after one year is .    To find the effective annual yield ( ): The effective annual yield is approximately .        Planning for Education: Present Value   Parents wish to have available for a child's education. If the child is now 1 year old, how much money must be set aside at compounded monthly to meet their financial goal when the child is 18?    To find the required initial investment, we use the Present Value formula: where:  (The target goal)  (Annual interest rate)  (Monthly compounding)  (Years remaining until the child is 18: )    Substituting these values into the formula:   The parents must set aside today to meet the goal in 17 years.     The Historical DeHaven Debt Calculation   In 1777, Jacob DeHaven loaned George Washington's army in gold and supplies. Due to a disagreement over repayment, he was never repaid. In 1989, his descendants sued the U.S. government over the 212-year-old debt. If the DeHavens used an interest rate of and daily compounding, how much money did the DeHaven family demand in their lawsuit?    To find the total value of the debt after 212 years, we use the compound interest formula: where:  (Initial loan)  (Annual interest rate)  (Daily compounding)  (Years from 1777 to 1989)    Substituting these values:   The DeHaven family's demand in the lawsuit was approximately billion. (Depending on rounding, specific historical claims often cited amounts ranging from to billion).     "
},
{
  "id": "notes-compound-interest-7",
  "level": "2",
  "url": "notes-compound-interest.html#notes-compound-interest-7",
  "type": "Table",
  "number": "2.8",
  "title": "Compound Interest Growth of $1000 in a savings account at a rate of 5%",
  "body": " Compound Interest Growth of $1000 in a savings account at a rate of 5%    Year  Beginning Balance ($)  Interest Earned:  New Balance($)    1  $1,000.00   $1,050.00    2  $1,050.00   $1,102.50    3  $1,102.50   $1,157.63    4  $1,157.63   $1,215.51    5  $1,215.51      6       "
},
{
  "id": "def-compound-interest-one-year",
  "level": "2",
  "url": "notes-compound-interest.html#def-compound-interest-one-year",
  "type": "Definition",
  "number": "2.9",
  "title": "Compound Interest Paid Once a Year.",
  "body": " Compound Interest Paid Once a Year   Calculating the amount in an account for compound interest paid once year:  where the amount is the account's future value and the principal is its present value .   "
},
{
  "id": "example-CI1",
  "level": "2",
  "url": "notes-compound-interest.html#example-CI1",
  "type": "Example",
  "number": "2.10",
  "title": "Calculating Compound interest for a year.",
  "body": " Calculating Compound interest for a year  You deposit $2,000 in a savings account, which has a rate 6%. Find the amount, A, of money in the account after 3 years subject to compound interest and find the interest.   To find the amount after 3 years, we use the compound interest formula   where , , and .  Substituting the values:   The interest earned is calculated as:    "
},
{
  "id": "def-Compound-interest-Future-Value",
  "level": "2",
  "url": "notes-compound-interest.html#def-Compound-interest-Future-Value",
  "type": "Definition",
  "number": "2.11",
  "title": "Compound interest: Future Value.",
  "body": " Compound interest: Future Value   If dollars are deposited at rate , in decimal form, subject to compound interest paid n times per year, then the amount, , of money in the account after t years is given by   where the amount is the account's future value and the principal is its present value .   "
},
{
  "id": "example-C2",
  "level": "2",
  "url": "notes-compound-interest.html#example-C2",
  "type": "Example",
  "number": "2.12",
  "title": "Calculating Compound Interest for More Than a Year.",
  "body": " Calculating Compound Interest for More Than a Year   You deposit $7,500 in a savings account that has a rate of 6%. The interest is compounded monthly. How much money will you have after five years? Find the interest after five years.    To find the future value of the account, we use the compound interest formula:   Given , , , and :   The account balance after five years is approximately $10,116.38. The interest earned over five years is:   The interest earned is $2,616.38.   "
},
{
  "id": "def-Compound-Interest-Present-Value",
  "level": "2",
  "url": "notes-compound-interest.html#def-Compound-Interest-Present-Value",
  "type": "Definition",
  "number": "2.13",
  "title": "Compound Interest: Present Value.",
  "body": " Compound Interest: Present Value   If dollars are to be accumulated in years in an account that pays rate compounded times per year, then the present value, , that needs to be invested now is given by    "
},
{
  "id": "example-C3",
  "level": "2",
  "url": "notes-compound-interest.html#example-C3",
  "type": "Example",
  "number": "2.14",
  "title": "Calculating present value.",
  "body": " Calculating present value  How much money should be deposited in an account today that earns 8% compounded monthly so that it will accumulate to $20,000 in five years?   To find the required deposit (Present Value), we use the formula: where:  (Future Value)  (Annual interest rate)  (Compounding periods per year)  (Time in years)    Substituting these values into the formula gives:   Therefore, a deposit of is required today.   "
},
{
  "id": "def-APY",
  "level": "2",
  "url": "notes-compound-interest.html#def-APY",
  "type": "Definition",
  "number": "2.15",
  "title": "Annual percentage yield (APY).",
  "body": " Annual percentage yield (APY)   Suppose that an investment has a nominal interest rate, , in decimal form, and pays compound interest times per year. The investment's effective annual yields , APY, is given by    "
},
{
  "id": "example-C4",
  "level": "2",
  "url": "notes-compound-interest.html#example-C4",
  "type": "Example",
  "number": "2.16",
  "title": "Understanding effective annual yield.",
  "body": " Understanding effective annual yield  You deposit $4000 in an account that pays 8% interest compounded monthly. Use the future value formula for simple interest to determine the effective annual yield.   By the formula for future value Rounded to nearest cent, the amount in the savings account after one year in $4332.00.  The effective annual yield is a simple interest rate. We use the future value formula for simple interest to determine the simple interest rate that produces a future value of $4332 for $4000 deposit after one year.   You will pay a simple interest rate of 8.3%. This means that money invested at 8.3% simple interest earns the same amount in one year as money invested at 8%interest compounded monthly.   "
},
{
  "id": "example-C5",
  "level": "2",
  "url": "notes-compound-interest.html#example-C5",
  "type": "Example",
  "number": "2.17",
  "title": "Calculating Effective Annual Yield.",
  "body": " Calculating Effective Annual Yield   A passbook savings account has a nominal rate of . The interest is compounded daily. Find the account's effective annual yield, assuming a -day year.    The Effective Yield (APY) represents the actual interest earned in one year. It is calculated using the formula: where:  (Nominal annual interest rate)  (Compounding periods per year)    Substituting the given values:   Converted to a percentage, the effective annual yield is approximately .   "
},
{
  "id": "example-C6",
  "level": "2",
  "url": "notes-compound-interest.html#example-C6",
  "type": "Example",
  "number": "2.18",
  "title": "Quarterly Compounding and Interest Calculation.",
  "body": " Quarterly Compounding and Interest Calculation   You deposit in a savings account at a bank that has a rate of . The interest is compounded quarterly.   How much money will you have after ten years? Round up to the nearest cent.    Find the interest.       First, we identify the variables for the compound interest formula:  (Principal)  (Annual rate)  (Quarterly compounding)  (Years)    For part (a), we calculate the future value ( ): Rounding up, the account balance will be .  For part (b), we find the interest earned ( ) by subtracting the principal from the future value: The interest earned is .   "
},
{
  "id": "exercise-C1",
  "level": "2",
  "url": "notes-compound-interest.html#exercise-C1",
  "type": "Checkpoint",
  "number": "2.19",
  "title": "Comparing Investment Options.",
  "body": " Comparing Investment Options   Suppose that you have to invest. Which investment yields the greater return over 5 years: compounded quarterly or compounded semiannually?    To determine which investment is superior, we calculate the future value ( ) for both options using the formula , where and .     Option 1: compounded quarterly  Here, and .     Option 2: compounded semiannually  Here, and .      Comparing the two totals, Option 1 results in while Option 2 results in .  Therefore, the investment compounded quarterly yields the greater return by .   "
},
{
  "id": "exercise-C2",
  "level": "2",
  "url": "notes-compound-interest.html#exercise-C2",
  "type": "Checkpoint",
  "number": "2.20",
  "title": "Present Value with Quarterly Compounding.",
  "body": " Present Value with Quarterly Compounding   How much money should be deposited today in an account that earns compounded quarterly so that it will accumulate to in ten years?    To find the required initial deposit, we use the Present Value formula: where:  (The target future value)  (The annual interest rate)  (Compounded quarterly)  (The time in years)    Substituting these values into the formula:   Therefore, a deposit of is required today to reach the goal of in ten years.   "
},
{
  "id": "exercise-C3",
  "level": "2",
  "url": "notes-compound-interest.html#exercise-C3",
  "type": "Exercise",
  "number": "1",
  "title": "Calculating Effective Annual Yield.",
  "body": " Calculating Effective Annual Yield   You deposit in an account that pays interest compounded monthly. Determine the effective annual yield.    The Effective Annual Yield (APY) is the actual annual rate of return and is independent of the principal amount deposited. We use the formula: where:  (Nominal annual interest rate)  (Compounding periods per year)    Substituting these values:   Converted to a percentage and rounded to two decimal places, the effective annual yield is .   "
},
{
  "id": "exercise-C4",
  "level": "2",
  "url": "notes-compound-interest.html#exercise-C4",
  "type": "Exercise",
  "number": "2",
  "title": "Future Value for a Long-Term Investment.",
  "body": " Future Value for a Long-Term Investment   At the time of her grandson's birth, a grandmother deposits in an account that pays compounded monthly. What will be the value of the account at the child's twenty-first birthday, assuming that no other deposits or withdrawals are made during this period?    To find the future value of the account, we use the compound interest formula: where:  (Initial deposit)  (Annual interest rate)  (Compounding periods per year)  (Time in years until the 21st birthday)    Substituting these values into the formula:   On the child's twenty-first birthday, the account will be worth .   "
},
{
  "id": "exercise-C5",
  "level": "2",
  "url": "notes-compound-interest.html#exercise-C5",
  "type": "Exercise",
  "number": "3",
  "title": "Interest Rate Concepts: True or False.",
  "body": " Interest Rate Concepts: True or False   Determine whether each statement is True or False and explain your reasoning.   My bank provides simple interest at per year, but I cannot determine if this is a better deal than a competing bank offering compound interest without knowing the compounding period.    My bank advertises a compound interest rate of , although, without making deposits or withdrawals, the balance in my account increased by in one year.           False. Any amount of compounding is better than simple interest when the nominal rates are identical (and greater than zero). While the compounding period determines how much better the deal is, we already know compound interest will yield more than simple interest regardless of whether it is compounded annually, monthly, or daily.     True. The advertised rate is the nominal rate ( ), but the increase represents the Effective Annual Yield . Because interest is added to the balance throughout the year, the actual growth is slightly higher than the nominal rate. For example, compounded monthly results in an effective yield of approximately .      "
},
{
  "id": "exercise-C6",
  "level": "2",
  "url": "notes-compound-interest.html#exercise-C6",
  "type": "Exercise",
  "number": "4",
  "title": "Quarterly Compounding vs. Simple Interest.",
  "body": " Quarterly Compounding vs. Simple Interest   A sum of is invested at an annual rate of . Find the balance in the account after 5 years subject to:   quarterly compounding    simple interest       We are given , , and .     Quarterly Compounding  Using the formula with : The balance with quarterly compounding is .    Simple Interest  Using the formula : The balance with simple interest is .     Quarterly compounding results in an additional compared to simple interest.   "
},
{
  "id": "exercise-C7",
  "level": "2",
  "url": "notes-compound-interest.html#exercise-C7",
  "type": "Exercise",
  "number": "5",
  "title": "Future Value and Effective Yield.",
  "body": " Future Value and Effective Yield   You deposit in an account that pays interest compounded monthly.   Find the future value after one year.    Determine the effective annual yield.       Given: , , , and .     To find the future value ( ) after one year: The future value after one year is .    To find the effective annual yield ( ): The effective annual yield is approximately .      "
},
{
  "id": "exercise-C8",
  "level": "2",
  "url": "notes-compound-interest.html#exercise-C8",
  "type": "Exercise",
  "number": "6",
  "title": "Planning for Education: Present Value.",
  "body": " Planning for Education: Present Value   Parents wish to have available for a child's education. If the child is now 1 year old, how much money must be set aside at compounded monthly to meet their financial goal when the child is 18?    To find the required initial investment, we use the Present Value formula: where:  (The target goal)  (Annual interest rate)  (Monthly compounding)  (Years remaining until the child is 18: )    Substituting these values into the formula:   The parents must set aside today to meet the goal in 17 years.   "
},
{
  "id": "exercise-C9",
  "level": "2",
  "url": "notes-compound-interest.html#exercise-C9",
  "type": "Exercise",
  "number": "7",
  "title": "The Historical DeHaven Debt Calculation.",
  "body": " The Historical DeHaven Debt Calculation   In 1777, Jacob DeHaven loaned George Washington's army in gold and supplies. Due to a disagreement over repayment, he was never repaid. In 1989, his descendants sued the U.S. government over the 212-year-old debt. If the DeHavens used an interest rate of and daily compounding, how much money did the DeHaven family demand in their lawsuit?    To find the total value of the debt after 212 years, we use the compound interest formula: where:  (Initial loan)  (Annual interest rate)  (Daily compounding)  (Years from 1777 to 1989)    Substituting these values:   The DeHaven family's demand in the lawsuit was approximately billion. (Depending on rounding, specific historical claims often cited amounts ranging from to billion).   "
},
{
  "id": "notes-Annuities",
  "level": "1",
  "url": "notes-Annuities.html",
  "type": "Section",
  "number": "",
  "title": "2.3 Saving Money: Annuities",
  "body": " 2.3 Saving Money: Annuities  An annuity is a sequence of equal (regular) payments made into an account over time periods. An IRA is an example of an annuity. The value of an annuity is the sum of all deposits plus all interest paid.   Annuity Basics   Suppose you deposit into a savings plan at the end of each year for three years. The interest rate is per year compounded annually.   Find the value of the annuity after three years.    Find the interest earned.       We calculate the balance step-by-step:   Value at the end of year 1:    Value at the end of year 2:     Value at the end of year 3:      The value of the annuity at the end of three years is . Since you made three payments of , the total principal deposited is .  The interest is:      Value of an Annuity: Interest Compounded Times per Year   If is the deposit made at the end of each compounding period for an annuity that pays an annual interest rate compounded times per year, the future value, or , of the annuity after years is:      Retirement Savings: IRA Annuity   To save for retirement, you decide to deposit into an IRA at the end of each year for the next 30 years. If you can count on an interest rate of per year compounded annually:   How much will you have from the IRA after 30 years?    Find the interest.       We use the future value formula for an annuity: where , , , and .     Substituting the values into the formula: After 30 years, the IRA will have .    To find the interest, we subtract the total deposits from the future value. Total deposits = . The total interest earned is .        Retirement Savings with Monthly Compounding   At age 25, to save for retirement, you decide to deposit at the end of each month into an IRA that pays compounded monthly.   How much will you have from the IRA when you retire at age 65?    Find the interest.       We use the future value formula for an annuity: where:  (Monthly deposit)  (Annual interest rate)  (Compounding periods per year)  (Years of investing: )       Substituting the values into the formula: At age 65, the IRA will be worth .    To find the interest, subtract the total deposits from the future value. Total deposits = . The total interest earned is .        Calculating Future Value of an Annuity   To save for a down payment on a home, you deposit at the end of each quarter into an account that pays compounded quarterly. How much will be in the account after years?    We use the future value formula for an annuity: where:  (Quarterly deposit)  (Annual interest rate)  (Compounded quarterly)  (Number of years)    Substituting these values into the formula:   After years, the account balance will be .     Logic Check: Annuities vs. Lump Sums   Determine whether each statement is True or False and explain your reasoning.   With the same interest rate, compounding period, and time period, an annuity will generate more interest than a lump sum deposit.    By putting at the end of each month into an IRA that pays compounded monthly, I'll be able to retire comfortably in just 30 years.           False. A lump sum deposit of the same total amount invested earns more interest because the entire amount is present at the beginning and earns interest for the full duration. In an annuity, the money is deposited gradually, so later payments have less time to grow.     False. We can calculate the total using the annuity formula where , , , and : A total of is not nearly enough to sustain a comfortable retirement.        Sinking Fund: Monthly Savings for College   Parents of a baby girl are in a financial position to begin saving for her college education. They plan to have in a college fund in 18 years by making regular, end-of-month deposits in an annuity that pays compounded monthly.   How much should they deposit each month?    How much of the goal comes from interest?       To find the required monthly payment ( ), we use the sinking fund formula, which is the annuity formula solved for : where , , , and .     Substituting the values: The parents should deposit each month.    To find the interest, we first calculate the total principal deposited: Subtracting this from the future value: The amount from interest is .        Calculating the Value of an Annuity   You deposit $2,000 into a savings plan at the end of each year for three years. The interest rate is 10% per year compounded annually.    Find the value of the annuity after three years.    Find the interest earned.      We use the future value formula for an annuity: where , , , and .    Substituting the values into the formula: The value of the annuity after three years is $6,620.    The total amount of deposits made is . The interest earned is the difference between the future value and the total deposits: The interest earned is $620.       Retirement Savings: Growth After Contributions Cease   To save for retirement, you decide to deposit $3,000 into an IRA at the end of each year for the next 10 years. If you can count on an interest rate of 9% per year compounded annually:    How much will you have from the IRA after 40 years, assuming no additional deposits or withdrawals after the 10 years of contribution?    Find the interest earned.      This problem requires two steps. First, we find the value of the annuity after the 10-year contribution period. Second, we treat that amount as a lump sum that grows for the remaining 30 years.   Step 1: Future Value of the Annuity (Years 1-10)     Step 2: Compound Interest on the Lump Sum (Years 11-40) The balance grows for more years using the formula :     After 40 years, the total value will be $604,725.10.    The total deposits were . The interest earned is $574,725.10.       Exercises for Practice   Retirement Savings Analysis   At age 30 to save for retirement, you decide to deposit at the end of each month into an IRA that pays compounded monthly.   How much will you have from the IRA when you retire at age 65?    Find the interest earned.       We use the future value formula for an ordinary annuity: where:  (Monthly deposit)  (Annual interest rate)  (Compounding periods per year)  (Years of saving: )       Substituting the values into the formula: You will have approximately in the IRA at age 65.    First, find the total amount of your deposits over 35 years: The interest earned is the future value minus these deposits: The total interest earned is .        Calculating Monthly Deposits to Reach a Goal   How much should you deposit at the end of each month into an IRA that pays compounded monthly to have million when you retire in 45 years? How much of the million comes from interest?    To find the required monthly payment ( ), we use the sinking fund formula: where:  (The target goal)  (Annual interest rate)  (Monthly compounding)  (Time in years)    Substituting these values into the formula: The required monthly deposit is .  To find the interest, we first calculate the total of all deposits: Subtracting this from the final value: Over the 45 years, of the final balance comes from interest.     Long-Term Retirement Savings Analysis   At age 25, to save for retirement, you decide to deposit at the end of each month in an IRA that pays compounded monthly. How much will you have from the IRA when you retire at age 70? What is the interest you earned?    We use the future value formula for an ordinary annuity: where:  (Monthly deposit)  (Annual interest rate)  (Compounding periods per year)  (Years of saving: )    Substituting the values into the formula: At age 70, you will have approximately in the IRA.  To find the interest earned, first calculate the total of your deposits: Subtracting the deposits from the future value: The total interest earned is .     Quarterly Deposits to Reach a Retirement Goal   How much should you deposit at the end of every 3 months into an IRA that pays compounded quarterly to have million when you retire in 40 years? How much of the million comes from interest?    To find the required quarterly payment ( ), we use the sinking fund formula: where:  (The target goal)  (Annual interest rate)  (Quarterly compounding)  (Time in years)    Substituting these values into the formula: The required quarterly deposit is .  To find the interest, we first calculate the total of all deposits over 40 years: Subtracting this from the final value: Over the 40 years, of the final balance comes from interest.     "
},
{
  "id": "notes-Annuities-2",
  "level": "2",
  "url": "notes-Annuities.html#notes-Annuities-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "annuity "
},
{
  "id": "ex-annuity-intro",
  "level": "2",
  "url": "notes-Annuities.html#ex-annuity-intro",
  "type": "Example",
  "number": "2.21",
  "title": "Annuity Basics.",
  "body": " Annuity Basics   Suppose you deposit into a savings plan at the end of each year for three years. The interest rate is per year compounded annually.   Find the value of the annuity after three years.    Find the interest earned.       We calculate the balance step-by-step:   Value at the end of year 1:    Value at the end of year 2:     Value at the end of year 3:      The value of the annuity at the end of three years is . Since you made three payments of , the total principal deposited is .  The interest is:    "
},
{
  "id": "Value-of-an-Annuity",
  "level": "2",
  "url": "notes-Annuities.html#Value-of-an-Annuity",
  "type": "Definition",
  "number": "2.22",
  "title": "Value of an Annuity: Interest Compounded <span class=\"process-math\">\\(n\\)<\/span> Times per Year.",
  "body": " Value of an Annuity: Interest Compounded Times per Year   If is the deposit made at the end of each compounding period for an annuity that pays an annual interest rate compounded times per year, the future value, or , of the annuity after years is:    "
},
{
  "id": "example-a1",
  "level": "2",
  "url": "notes-Annuities.html#example-a1",
  "type": "Example",
  "number": "2.23",
  "title": "Retirement Savings: IRA Annuity.",
  "body": " Retirement Savings: IRA Annuity   To save for retirement, you decide to deposit into an IRA at the end of each year for the next 30 years. If you can count on an interest rate of per year compounded annually:   How much will you have from the IRA after 30 years?    Find the interest.       We use the future value formula for an annuity: where , , , and .     Substituting the values into the formula: After 30 years, the IRA will have .    To find the interest, we subtract the total deposits from the future value. Total deposits = . The total interest earned is .      "
},
{
  "id": "example-a2",
  "level": "2",
  "url": "notes-Annuities.html#example-a2",
  "type": "Example",
  "number": "2.24",
  "title": "Retirement Savings with Monthly Compounding.",
  "body": " Retirement Savings with Monthly Compounding   At age 25, to save for retirement, you decide to deposit at the end of each month into an IRA that pays compounded monthly.   How much will you have from the IRA when you retire at age 65?    Find the interest.       We use the future value formula for an annuity: where:  (Monthly deposit)  (Annual interest rate)  (Compounding periods per year)  (Years of investing: )       Substituting the values into the formula: At age 65, the IRA will be worth .    To find the interest, subtract the total deposits from the future value. Total deposits = . The total interest earned is .      "
},
{
  "id": "exercise-a1",
  "level": "2",
  "url": "notes-Annuities.html#exercise-a1",
  "type": "Checkpoint",
  "number": "2.25",
  "title": "Calculating Future Value of an Annuity.",
  "body": " Calculating Future Value of an Annuity   To save for a down payment on a home, you deposit at the end of each quarter into an account that pays compounded quarterly. How much will be in the account after years?    We use the future value formula for an annuity: where:  (Quarterly deposit)  (Annual interest rate)  (Compounded quarterly)  (Number of years)    Substituting these values into the formula:   After years, the account balance will be .   "
},
{
  "id": "example-a3",
  "level": "2",
  "url": "notes-Annuities.html#example-a3",
  "type": "Example",
  "number": "2.26",
  "title": "Logic Check: Annuities vs. Lump Sums.",
  "body": " Logic Check: Annuities vs. Lump Sums   Determine whether each statement is True or False and explain your reasoning.   With the same interest rate, compounding period, and time period, an annuity will generate more interest than a lump sum deposit.    By putting at the end of each month into an IRA that pays compounded monthly, I'll be able to retire comfortably in just 30 years.           False. A lump sum deposit of the same total amount invested earns more interest because the entire amount is present at the beginning and earns interest for the full duration. In an annuity, the money is deposited gradually, so later payments have less time to grow.     False. We can calculate the total using the annuity formula where , , , and : A total of is not nearly enough to sustain a comfortable retirement.      "
},
{
  "id": "example-a4",
  "level": "2",
  "url": "notes-Annuities.html#example-a4",
  "type": "Example",
  "number": "2.27",
  "title": "Sinking Fund: Monthly Savings for College.",
  "body": " Sinking Fund: Monthly Savings for College   Parents of a baby girl are in a financial position to begin saving for her college education. They plan to have in a college fund in 18 years by making regular, end-of-month deposits in an annuity that pays compounded monthly.   How much should they deposit each month?    How much of the goal comes from interest?       To find the required monthly payment ( ), we use the sinking fund formula, which is the annuity formula solved for : where , , , and .     Substituting the values: The parents should deposit each month.    To find the interest, we first calculate the total principal deposited: Subtracting this from the future value: The amount from interest is .      "
},
{
  "id": "exercise-a3",
  "level": "2",
  "url": "notes-Annuities.html#exercise-a3",
  "type": "Checkpoint",
  "number": "2.28",
  "title": "Calculating the Value of an Annuity.",
  "body": " Calculating the Value of an Annuity   You deposit $2,000 into a savings plan at the end of each year for three years. The interest rate is 10% per year compounded annually.    Find the value of the annuity after three years.    Find the interest earned.      We use the future value formula for an annuity: where , , , and .    Substituting the values into the formula: The value of the annuity after three years is $6,620.    The total amount of deposits made is . The interest earned is the difference between the future value and the total deposits: The interest earned is $620.     "
},
{
  "id": "exercise-a4",
  "level": "2",
  "url": "notes-Annuities.html#exercise-a4",
  "type": "Checkpoint",
  "number": "2.29",
  "title": "Retirement Savings: Growth After Contributions Cease.",
  "body": " Retirement Savings: Growth After Contributions Cease   To save for retirement, you decide to deposit $3,000 into an IRA at the end of each year for the next 10 years. If you can count on an interest rate of 9% per year compounded annually:    How much will you have from the IRA after 40 years, assuming no additional deposits or withdrawals after the 10 years of contribution?    Find the interest earned.      This problem requires two steps. First, we find the value of the annuity after the 10-year contribution period. Second, we treat that amount as a lump sum that grows for the remaining 30 years.   Step 1: Future Value of the Annuity (Years 1-10)     Step 2: Compound Interest on the Lump Sum (Years 11-40) The balance grows for more years using the formula :     After 40 years, the total value will be $604,725.10.    The total deposits were . The interest earned is $574,725.10.     "
},
{
  "id": "exercise-a5",
  "level": "2",
  "url": "notes-Annuities.html#exercise-a5",
  "type": "Exercise",
  "number": "1",
  "title": "Retirement Savings Analysis.",
  "body": " Retirement Savings Analysis   At age 30 to save for retirement, you decide to deposit at the end of each month into an IRA that pays compounded monthly.   How much will you have from the IRA when you retire at age 65?    Find the interest earned.       We use the future value formula for an ordinary annuity: where:  (Monthly deposit)  (Annual interest rate)  (Compounding periods per year)  (Years of saving: )       Substituting the values into the formula: You will have approximately in the IRA at age 65.    First, find the total amount of your deposits over 35 years: The interest earned is the future value minus these deposits: The total interest earned is .      "
},
{
  "id": "exercise-a6",
  "level": "2",
  "url": "notes-Annuities.html#exercise-a6",
  "type": "Exercise",
  "number": "2",
  "title": "Calculating Monthly Deposits to Reach a Goal.",
  "body": " Calculating Monthly Deposits to Reach a Goal   How much should you deposit at the end of each month into an IRA that pays compounded monthly to have million when you retire in 45 years? How much of the million comes from interest?    To find the required monthly payment ( ), we use the sinking fund formula: where:  (The target goal)  (Annual interest rate)  (Monthly compounding)  (Time in years)    Substituting these values into the formula: The required monthly deposit is .  To find the interest, we first calculate the total of all deposits: Subtracting this from the final value: Over the 45 years, of the final balance comes from interest.   "
},
{
  "id": "exercise-a7",
  "level": "2",
  "url": "notes-Annuities.html#exercise-a7",
  "type": "Exercise",
  "number": "3",
  "title": "Long-Term Retirement Savings Analysis.",
  "body": " Long-Term Retirement Savings Analysis   At age 25, to save for retirement, you decide to deposit at the end of each month in an IRA that pays compounded monthly. How much will you have from the IRA when you retire at age 70? What is the interest you earned?    We use the future value formula for an ordinary annuity: where:  (Monthly deposit)  (Annual interest rate)  (Compounding periods per year)  (Years of saving: )    Substituting the values into the formula: At age 70, you will have approximately in the IRA.  To find the interest earned, first calculate the total of your deposits: Subtracting the deposits from the future value: The total interest earned is .   "
},
{
  "id": "exercise-a8",
  "level": "2",
  "url": "notes-Annuities.html#exercise-a8",
  "type": "Exercise",
  "number": "4",
  "title": "Quarterly Deposits to Reach a Retirement Goal.",
  "body": " Quarterly Deposits to Reach a Retirement Goal   How much should you deposit at the end of every 3 months into an IRA that pays compounded quarterly to have million when you retire in 40 years? How much of the million comes from interest?    To find the required quarterly payment ( ), we use the sinking fund formula: where:  (The target goal)  (Annual interest rate)  (Quarterly compounding)  (Time in years)    Substituting these values into the formula: The required quarterly deposit is .  To find the interest, we first calculate the total of all deposits over 40 years: Subtracting this from the final value: Over the 40 years, of the final balance comes from interest.   "
},
{
  "id": "notes-Mortgages",
  "level": "1",
  "url": "notes-Mortgages.html",
  "type": "Section",
  "number": "",
  "title": "2.4 Borrowing Money: Mortgage",
  "body": " 2.4 Borrowing Money: Mortgage    A mortgage is a long-term loan (perhaps up to 15 or 30 years) for the purpose of buying a home, and for which the property is pledged as security for payment.  The down payment is the portion of the sale price of the home that the buyer initially pays to the seller.  The minimum required down payment is computes as a percentage of the sale price.  The amount of the mortgage is the difference between the sale price and the down payment.  The points are charged for your mortgage. One point equals one percent of the loan amount.   For example, you make a 10% down payment of $120,000 home, the amount of the mortgage is . So, if your mortgage is $108,000, one point is $1,080. You pay these points up front when you begin the mortgage.  Many financial institutions or mortgage companies provide mortgage loans. Some companies, called mortgage broker offer to find you a mortgage lender willing to make you a loan. Mortgages can have a fixed interest rate or a variable interest rate. Fixed-rate mortgages have same monthly payment during the entire time of the loan.   Loan Payment Formula for Fixed Installment Loans   The regular payment amount, , required to repay a loan of dollars paid times per year over years at an annual rate is given by:    where:    is regular Payment Amount (usually a monthly payment)     is the principal amount (loan balance)     is the annual interest rate (as a decimal)     is the number of payments per year     is the total number of years         The price of a home is $195,000. The bank requires a 10% down payment and two points at the time of closing. The cost of the home is financed with 30-year fixed rate mortgage at 7.5%.    Find the required down payment.    Find the amount of the mortgage.    How much must be paid for the two points at closing?    Find the monthly payment    Find the total interest paid over 30 years.        The required down payment is 10% of $195,000 or     The amount of the mortgage is the difference between the price of the home and the down payment:     To find the cost of two points on a mortgage of $175,500: The down payment ($19,500) is paid to the seller and the cost of two points ($3,510) is paid to the lending institution.   Computing Monthly Mortgage Payments  The monthly mortgage payment, , required to repay a loan of dollars paid times per year over years at an annual rate is:      The monthly payments are:     The total payments are calculated by multiplying the monthly payment by the total number of periods (360 months): The interest paid over 30 years is the total payments minus the original principal:        Comparing 30-Year and 15-Year Mortgages   In ,a mortgage of $175,500 was financed with a 30-year fixed rate at 7.5%.   Find the monthly payment for the 30-year mortgage.  Find the total interest paid over 30 years.  Find the total interest paid if the loan was instead for 15 years at the same rate.  How much interest is saved by reducing the mortgage from 30 to 15 years?       We use the formula with , , , and :     The total interest for 30 years is the total payments minus the principal:      First, find the 15-year monthly payment ( ): Now calculate the total 15-year interest:      The interest saved is the difference between the two interest totals:        Condominium Mortgage Analysis   The price of a condominium is $280,000. The bank requires a 5% down payment and one point at the time of closing. The cost of the condominium is financed with a 30-year fixed-rate mortgage at 8%.   Find the required down payment.  Find the amount of the mortgage.  How much must be paid for the one point at closing?  Find the monthly payment by using the monthly payment formula.  Find the total cost of interest over 30 years.       The down payment is 5% of the purchase price:     The mortgage amount is the price minus the down payment:     One point is 1% of the mortgage amount:     Using the formula with , , , and :     Total payments over 30 years are .  The total interest is:        Student Loan Term Comparison   A student graduates from college with a loan of $36,000 at an 8% annual interest rate.    Find the monthly payments and the total interest for a 10-year loan term.    If the interest rate remains at 8% and the loan term is reduced to 5 years, how much more must the student pay each month and how much less will be paid in total interest?         Monthly payment: $436.78; Total interest: $16,413.60    Monthly increase: $293.07; Interest saved: $8,414.40         For :      For :    The monthly increase is . The interest saved is . (Note: Small differences may occur due to rounding).       Mortgage Comparison with Points and Closing Costs   Which mortgage loan has the greater total cost and by how much? Consider a $210,000 mortgage with these two options:     Mortgage A : 20-year fixed at 7% with closing costs of $3,000 and 2 points.     Mortgage B : 20-year fixed at 6.75% with closing costs of $1,750 and 4 points.      Mortgage A has the greater total cost by $4,577.20.    The total cost for each mortgage includes the sum of all monthly payments, the cost of points, and the fixed closing costs.    Mortgage A Calculations  First, calculate the monthly payment ( ): Next, find the total cost of payments, points, and closing:     Mortgage B Calculations  First, calculate the monthly payment ( ): Next, find the total cost:     Comparison  Mortgage A is more expensive. The difference is: (Note: Differences in final cents may vary based on rounding the monthly payment).       Maximum Purchase Price Formula   The maximum purchase price for a house is given by where:    is the monthly mortgage payment     is the number of payments per year     is the total number of years (loan term)     is the annual interest rate (as a decimal)        Calculating Maximum Mortgage Amount   Amanda and Fred are buying a house on a 30-year mortgage. They can afford a monthly payment of $800. If the annual interest rate (APR) is 3.75%, what is the maximum mortgage amount they can take out?    We use the maximum purchase price formula with , , , and :   First, calculate the periodic interest rate: .  Now, substitute into the formula:   Amanda and Fred can take out a mortgage of approximately $172,795.90 .     Home Affordability and Loan Terms   Suppose you want to purchase a house and your take-home pay is $3,220 per month. You wish to stay within recommended guidelines by spending of your take-home pay on a house payment. You have $15,300 saved for a down payment. With your excellent credit, you can get an APR of 3.28% compounded monthly.   What is the total cost of a house you could afford with a 15-year mortgage?  What is the most that you could afford with a traditional 30-year mortgage?       15-year mortgage: $130,175.76  30-year mortgage: $199,444.60      First, calculate the allowed monthly payment ( ): The monthly interest rate is .    15-Year Mortgage Affordability  Using the Maximum Purchase Price formula with and ( ): The total house cost includes the down payment:     30-Year Mortgage Affordability  Using the formula with ( ): The total house cost includes the down payment:       "
},
{
  "id": "def-loan-payment",
  "level": "2",
  "url": "notes-Mortgages.html#def-loan-payment",
  "type": "Definition",
  "number": "2.30",
  "title": "Loan Payment Formula for Fixed Installment Loans.",
  "body": " Loan Payment Formula for Fixed Installment Loans   The regular payment amount, , required to repay a loan of dollars paid times per year over years at an annual rate is given by:    where:    is regular Payment Amount (usually a monthly payment)     is the principal amount (loan balance)     is the annual interest rate (as a decimal)     is the number of payments per year     is the total number of years     "
},
{
  "id": "example-m1",
  "level": "2",
  "url": "notes-Mortgages.html#example-m1",
  "type": "Example",
  "number": "2.31",
  "title": ".",
  "body": "   The price of a home is $195,000. The bank requires a 10% down payment and two points at the time of closing. The cost of the home is financed with 30-year fixed rate mortgage at 7.5%.    Find the required down payment.    Find the amount of the mortgage.    How much must be paid for the two points at closing?    Find the monthly payment    Find the total interest paid over 30 years.        The required down payment is 10% of $195,000 or     The amount of the mortgage is the difference between the price of the home and the down payment:     To find the cost of two points on a mortgage of $175,500: The down payment ($19,500) is paid to the seller and the cost of two points ($3,510) is paid to the lending institution.   Computing Monthly Mortgage Payments  The monthly mortgage payment, , required to repay a loan of dollars paid times per year over years at an annual rate is:      The monthly payments are:     The total payments are calculated by multiplying the monthly payment by the total number of periods (360 months): The interest paid over 30 years is the total payments minus the original principal:      "
},
{
  "id": "example-mortgage-M01",
  "level": "2",
  "url": "notes-Mortgages.html#example-mortgage-M01",
  "type": "Example",
  "number": "2.32",
  "title": "Comparing 30-Year and 15-Year Mortgages.",
  "body": " Comparing 30-Year and 15-Year Mortgages   In ,a mortgage of $175,500 was financed with a 30-year fixed rate at 7.5%.   Find the monthly payment for the 30-year mortgage.  Find the total interest paid over 30 years.  Find the total interest paid if the loan was instead for 15 years at the same rate.  How much interest is saved by reducing the mortgage from 30 to 15 years?       We use the formula with , , , and :     The total interest for 30 years is the total payments minus the principal:      First, find the 15-year monthly payment ( ): Now calculate the total 15-year interest:      The interest saved is the difference between the two interest totals:      "
},
{
  "id": "ex-condo-mortgage-M02",
  "level": "2",
  "url": "notes-Mortgages.html#ex-condo-mortgage-M02",
  "type": "Example",
  "number": "2.33",
  "title": "Condominium Mortgage Analysis.",
  "body": " Condominium Mortgage Analysis   The price of a condominium is $280,000. The bank requires a 5% down payment and one point at the time of closing. The cost of the condominium is financed with a 30-year fixed-rate mortgage at 8%.   Find the required down payment.  Find the amount of the mortgage.  How much must be paid for the one point at closing?  Find the monthly payment by using the monthly payment formula.  Find the total cost of interest over 30 years.       The down payment is 5% of the purchase price:     The mortgage amount is the price minus the down payment:     One point is 1% of the mortgage amount:     Using the formula with , , , and :     Total payments over 30 years are .  The total interest is:      "
},
{
  "id": "ex-student-loan-comparison-M03",
  "level": "2",
  "url": "notes-Mortgages.html#ex-student-loan-comparison-M03",
  "type": "Checkpoint",
  "number": "2.34",
  "title": "Student Loan Term Comparison.",
  "body": " Student Loan Term Comparison   A student graduates from college with a loan of $36,000 at an 8% annual interest rate.    Find the monthly payments and the total interest for a 10-year loan term.    If the interest rate remains at 8% and the loan term is reduced to 5 years, how much more must the student pay each month and how much less will be paid in total interest?         Monthly payment: $436.78; Total interest: $16,413.60    Monthly increase: $293.07; Interest saved: $8,414.40         For :      For :    The monthly increase is . The interest saved is . (Note: Small differences may occur due to rounding).     "
},
{
  "id": "ex-mortgage-comparison-points-M04",
  "level": "2",
  "url": "notes-Mortgages.html#ex-mortgage-comparison-points-M04",
  "type": "Checkpoint",
  "number": "2.35",
  "title": "Mortgage Comparison with Points and Closing Costs.",
  "body": " Mortgage Comparison with Points and Closing Costs   Which mortgage loan has the greater total cost and by how much? Consider a $210,000 mortgage with these two options:     Mortgage A : 20-year fixed at 7% with closing costs of $3,000 and 2 points.     Mortgage B : 20-year fixed at 6.75% with closing costs of $1,750 and 4 points.      Mortgage A has the greater total cost by $4,577.20.    The total cost for each mortgage includes the sum of all monthly payments, the cost of points, and the fixed closing costs.    Mortgage A Calculations  First, calculate the monthly payment ( ): Next, find the total cost of payments, points, and closing:     Mortgage B Calculations  First, calculate the monthly payment ( ): Next, find the total cost:     Comparison  Mortgage A is more expensive. The difference is: (Note: Differences in final cents may vary based on rounding the monthly payment).     "
},
{
  "id": "def-max-purchase-price",
  "level": "2",
  "url": "notes-Mortgages.html#def-max-purchase-price",
  "type": "Definition",
  "number": "2.36",
  "title": "Maximum Purchase Price Formula.",
  "body": " Maximum Purchase Price Formula   The maximum purchase price for a house is given by where:    is the monthly mortgage payment     is the number of payments per year     is the total number of years (loan term)     is the annual interest rate (as a decimal)      "
},
{
  "id": "ex-max-purchase-M05",
  "level": "2",
  "url": "notes-Mortgages.html#ex-max-purchase-M05",
  "type": "Example",
  "number": "2.37",
  "title": "Calculating Maximum Mortgage Amount.",
  "body": " Calculating Maximum Mortgage Amount   Amanda and Fred are buying a house on a 30-year mortgage. They can afford a monthly payment of $800. If the annual interest rate (APR) is 3.75%, what is the maximum mortgage amount they can take out?    We use the maximum purchase price formula with , , , and :   First, calculate the periodic interest rate: .  Now, substitute into the formula:   Amanda and Fred can take out a mortgage of approximately $172,795.90 .   "
},
{
  "id": "ex-home-affordability-M06",
  "level": "2",
  "url": "notes-Mortgages.html#ex-home-affordability-M06",
  "type": "Checkpoint",
  "number": "2.38",
  "title": "Home Affordability and Loan Terms.",
  "body": " Home Affordability and Loan Terms   Suppose you want to purchase a house and your take-home pay is $3,220 per month. You wish to stay within recommended guidelines by spending of your take-home pay on a house payment. You have $15,300 saved for a down payment. With your excellent credit, you can get an APR of 3.28% compounded monthly.   What is the total cost of a house you could afford with a 15-year mortgage?  What is the most that you could afford with a traditional 30-year mortgage?       15-year mortgage: $130,175.76  30-year mortgage: $199,444.60      First, calculate the allowed monthly payment ( ): The monthly interest rate is .    15-Year Mortgage Affordability  Using the Maximum Purchase Price formula with and ( ): The total house cost includes the down payment:     30-Year Mortgage Affordability  Using the formula with ( ): The total house cost includes the down payment:      "
},
{
  "id": "sec-Identify-Formulas",
  "level": "1",
  "url": "sec-Identify-Formulas.html",
  "type": "Section",
  "number": "",
  "title": "2.5 Identify Formulas to use: Simple, Compound, Annuity, Loans",
  "body": " 2.5 Identify Formulas to use: Simple, Compound, Annuity, Loans     Lonnie needs extra money to buy a truck to start up a delivery service. He takes out a simple interest loan for $7,000 for 6 months at a rate of 7.25%. How much interest must he pay, and what is the future value of the loan?    ; Interest: $253.75; Future Value: $7,253.75      If you placed $1 into an account that paid interest at a rate of 5% and compounded the interest daily, how much would that account is worth in 300 years?    ; $3,268,864.51      You are purchasing a house for $155,000. The bank requires a down payment of 15% and 2.25 points at closing. The bank will give you a 20 year mortgage at 3.8%. What is the monthly payment you will make? What is the total interest paid?    ; Monthly Payment: $783.50; Total Interest: $56,289.44      You deposit $8,500 for 9 years in an account that earns 2.5% interest and compounds weekly. How much interest will you earn?    ; $2,143.91      You lend 650 dollars to your younger brother for tuition. He agrees to pay you back $720 in 4 months. What is the interest rate he paid you?    ; 32.31%      A mother invests $ 2000 in a bank account at the time of her daughter's birth. The interest is compounded quarterly at a rate of 8%. What will be the value of the daughter's account on her twentieth birthday?    ; $9,750.88      Your grandmother lent you $2000 for 4 years to buy a car. You agreed to pay her 5% interest. How much do you have to pay her in total at the end of 4 years?    ; $2,400.00      Which is the better choice: $1000 deposited for a year at a rate of 5.5% compounded semiannually or at a rate of 5.4% compounded quarterly?     ; 5.5% compounded semiannually ($1,055.76 vs $1,055.10)      Ellen puts $100 each month into an IRA that pays 7.4% annually. How much money will she have in 30 years for her retirement? How much will come from interest?    ; Total Value: $132,410.87; Interest: $96,410.87      You want to save for your three year olds college education. You decide that you need $200,000 in 12 years. How much do you need to deposit monthly into an account that pays 8.7% interest and compounds monthly.    ; $796.86      Joe and Susan are purchasing a condo for $350,000. The bank requires a down payment of 30% and 4.75 points at closing. You are considering a 15 year mortgage at 4.75% and a 30 year mortgage at 3.2%. Which mortgage will result in a lower monthly payment?    ; Option B: 30-year at 3.2% ($1,061.27 vs Option A: $1,906.18)      Pete wants to buy a boat in 4 years. The boat costs $100,000. How much money does he need to deposit weekly into an account that pays 3.5% interest compounded weekly?    ; $447.93      How much money should be deposited today in an account that earns 10% compounded semiannually so that it will accumulate to $ 1000 in 12 years?     ; $310.07      Juan can save $50 every week for his honeymoon. If Juan is getting married in two years how much money will he have spent on the trip if he puts it into an annuity that pays 6%?    ; $5,516.48      How much money should be deposited today in an account that earns 8% compounded quarterly so that it will accumulate to $ 3800 in 12 years?    ; $1,468.32     "
},
{
  "id": "exercises-finance-answers-1",
  "level": "2",
  "url": "sec-Identify-Formulas.html#exercises-finance-answers-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Lonnie needs extra money to buy a truck to start up a delivery service. He takes out a simple interest loan for $7,000 for 6 months at a rate of 7.25%. How much interest must he pay, and what is the future value of the loan?    ; Interest: $253.75; Future Value: $7,253.75   "
},
{
  "id": "exercises-finance-answers-2",
  "level": "2",
  "url": "sec-Identify-Formulas.html#exercises-finance-answers-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  If you placed $1 into an account that paid interest at a rate of 5% and compounded the interest daily, how much would that account is worth in 300 years?    ; $3,268,864.51   "
},
{
  "id": "exercises-finance-answers-3",
  "level": "2",
  "url": "sec-Identify-Formulas.html#exercises-finance-answers-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  You are purchasing a house for $155,000. The bank requires a down payment of 15% and 2.25 points at closing. The bank will give you a 20 year mortgage at 3.8%. What is the monthly payment you will make? What is the total interest paid?    ; Monthly Payment: $783.50; Total Interest: $56,289.44   "
},
{
  "id": "exercises-finance-answers-4",
  "level": "2",
  "url": "sec-Identify-Formulas.html#exercises-finance-answers-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  You deposit $8,500 for 9 years in an account that earns 2.5% interest and compounds weekly. How much interest will you earn?    ; $2,143.91   "
},
{
  "id": "exercises-finance-answers-5",
  "level": "2",
  "url": "sec-Identify-Formulas.html#exercises-finance-answers-5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  You lend 650 dollars to your younger brother for tuition. He agrees to pay you back $720 in 4 months. What is the interest rate he paid you?    ; 32.31%   "
},
{
  "id": "exercises-finance-answers-6",
  "level": "2",
  "url": "sec-Identify-Formulas.html#exercises-finance-answers-6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  A mother invests $ 2000 in a bank account at the time of her daughter's birth. The interest is compounded quarterly at a rate of 8%. What will be the value of the daughter's account on her twentieth birthday?    ; $9,750.88   "
},
{
  "id": "exercises-finance-answers-7",
  "level": "2",
  "url": "sec-Identify-Formulas.html#exercises-finance-answers-7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  Your grandmother lent you $2000 for 4 years to buy a car. You agreed to pay her 5% interest. How much do you have to pay her in total at the end of 4 years?    ; $2,400.00   "
},
{
  "id": "exercises-finance-answers-8",
  "level": "2",
  "url": "sec-Identify-Formulas.html#exercises-finance-answers-8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  Which is the better choice: $1000 deposited for a year at a rate of 5.5% compounded semiannually or at a rate of 5.4% compounded quarterly?     ; 5.5% compounded semiannually ($1,055.76 vs $1,055.10)   "
},
{
  "id": "exercises-finance-answers-9",
  "level": "2",
  "url": "sec-Identify-Formulas.html#exercises-finance-answers-9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  Ellen puts $100 each month into an IRA that pays 7.4% annually. How much money will she have in 30 years for her retirement? How much will come from interest?    ; Total Value: $132,410.87; Interest: $96,410.87   "
},
{
  "id": "exercises-finance-answers-10",
  "level": "2",
  "url": "sec-Identify-Formulas.html#exercises-finance-answers-10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  You want to save for your three year olds college education. You decide that you need $200,000 in 12 years. How much do you need to deposit monthly into an account that pays 8.7% interest and compounds monthly.    ; $796.86   "
},
{
  "id": "exercises-finance-answers-11",
  "level": "2",
  "url": "sec-Identify-Formulas.html#exercises-finance-answers-11",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  Joe and Susan are purchasing a condo for $350,000. The bank requires a down payment of 30% and 4.75 points at closing. You are considering a 15 year mortgage at 4.75% and a 30 year mortgage at 3.2%. Which mortgage will result in a lower monthly payment?    ; Option B: 30-year at 3.2% ($1,061.27 vs Option A: $1,906.18)   "
},
{
  "id": "exercises-finance-answers-12",
  "level": "2",
  "url": "sec-Identify-Formulas.html#exercises-finance-answers-12",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "  Pete wants to buy a boat in 4 years. The boat costs $100,000. How much money does he need to deposit weekly into an account that pays 3.5% interest compounded weekly?    ; $447.93   "
},
{
  "id": "exercises-finance-answers-13",
  "level": "2",
  "url": "sec-Identify-Formulas.html#exercises-finance-answers-13",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "  How much money should be deposited today in an account that earns 10% compounded semiannually so that it will accumulate to $ 1000 in 12 years?     ; $310.07   "
},
{
  "id": "exercises-finance-answers-14",
  "level": "2",
  "url": "sec-Identify-Formulas.html#exercises-finance-answers-14",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "  Juan can save $50 every week for his honeymoon. If Juan is getting married in two years how much money will he have spent on the trip if he puts it into an annuity that pays 6%?    ; $5,516.48   "
},
{
  "id": "exercises-finance-answers-15",
  "level": "2",
  "url": "sec-Identify-Formulas.html#exercises-finance-answers-15",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "  How much money should be deposited today in an account that earns 8% compounded quarterly so that it will accumulate to $ 3800 in 12 years?    ; $1,468.32   "
},
{
  "id": "sec-fin-ch-ex",
  "level": "1",
  "url": "sec-fin-ch-ex.html",
  "type": "Section",
  "number": "",
  "title": "2.6 Chapter Exercises",
  "body": " 2.6 Chapter Exercises   Personal Finance Practice Problem    Suppose a local sales tax rate is and you purchase a car for .  How much sales tax is paid?  How much is the total cost of the car?                Tax = .  Total = .        A bank offers a CD that pays a simple interest rate of . How much must you put in this CD now in order to have for college tuition in five years?       Use .   .      How much money should be deposited today in an account that earns compounded quarterly so that it will accumulate to in ten years?       Use .  .      The cost of washer-dryer is . We can finance this by paying down and per month for 12 months. Determine the finance charge.       Total paid = Down payment + (Monthly payment months) Total = . Finance Charge = .      At the time of her grandson's birth, a grandmother deposits in an account that pays compounded monthly. What will be the value of the account at the child's twenty-first birthday?         .      You deposit in an account that pays interest compounded monthly. Find the future value after one year and the effective annual yield.    FV: ; Yield:    FV = . Yield = or .      Find the value of an annuity of at the end of every 6 months at compounded semiannually for 10 years.    Value: ; Interest:    Use . . Total deposits = . Interest = .      Financial goal of at compounded quarterly for 35 years. Find the periodic deposit.    Deposit:      .      Loan of at for 10 years.  Find monthly payments and total interest.  Compare to a 5-year term.        Payment: ; Interest:  Pay more per month; Save interest.      Use .  10-yr: . Total paid = . Interest = .  5-yr: . Total paid = . Interest = .     "
},
{
  "id": "sec-fin-ch-ex-2-2",
  "level": "2",
  "url": "sec-fin-ch-ex.html#sec-fin-ch-ex-2-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Suppose a local sales tax rate is and you purchase a car for .  How much sales tax is paid?  How much is the total cost of the car?                Tax = .  Total = .     "
},
{
  "id": "sec-fin-ch-ex-2-3",
  "level": "2",
  "url": "sec-fin-ch-ex.html#sec-fin-ch-ex-2-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  A bank offers a CD that pays a simple interest rate of . How much must you put in this CD now in order to have for college tuition in five years?       Use .   .   "
},
{
  "id": "sec-fin-ch-ex-2-4",
  "level": "2",
  "url": "sec-fin-ch-ex.html#sec-fin-ch-ex-2-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  How much money should be deposited today in an account that earns compounded quarterly so that it will accumulate to in ten years?       Use .  .   "
},
{
  "id": "sec-fin-ch-ex-2-5",
  "level": "2",
  "url": "sec-fin-ch-ex.html#sec-fin-ch-ex-2-5",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  The cost of washer-dryer is . We can finance this by paying down and per month for 12 months. Determine the finance charge.       Total paid = Down payment + (Monthly payment months) Total = . Finance Charge = .   "
},
{
  "id": "sec-fin-ch-ex-2-6",
  "level": "2",
  "url": "sec-fin-ch-ex.html#sec-fin-ch-ex-2-6",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  At the time of her grandson's birth, a grandmother deposits in an account that pays compounded monthly. What will be the value of the account at the child's twenty-first birthday?         .   "
},
{
  "id": "sec-fin-ch-ex-2-7",
  "level": "2",
  "url": "sec-fin-ch-ex.html#sec-fin-ch-ex-2-7",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  You deposit in an account that pays interest compounded monthly. Find the future value after one year and the effective annual yield.    FV: ; Yield:    FV = . Yield = or .   "
},
{
  "id": "sec-fin-ch-ex-2-8",
  "level": "2",
  "url": "sec-fin-ch-ex.html#sec-fin-ch-ex-2-8",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  Find the value of an annuity of at the end of every 6 months at compounded semiannually for 10 years.    Value: ; Interest:    Use . . Total deposits = . Interest = .   "
},
{
  "id": "sec-fin-ch-ex-2-9",
  "level": "2",
  "url": "sec-fin-ch-ex.html#sec-fin-ch-ex-2-9",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  Financial goal of at compounded quarterly for 35 years. Find the periodic deposit.    Deposit:      .   "
},
{
  "id": "sec-fin-ch-ex-2-10",
  "level": "2",
  "url": "sec-fin-ch-ex.html#sec-fin-ch-ex-2-10",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  Loan of at for 10 years.  Find monthly payments and total interest.  Compare to a 5-year term.        Payment: ; Interest:  Pay more per month; Save interest.      Use .  10-yr: . Total paid = . Interest = .  5-yr: . Total paid = . Interest = .   "
},
{
  "id": "ch-Probability-3",
  "level": "1",
  "url": "ch-Probability-3.html",
  "type": "Section",
  "number": "",
  "title": "3.1 Fundamentals of Probability",
  "body": " 3.1 Fundamentals of Probability   Probability Formula   The theoretical probability of an event is a measure of how likely that event is to occur based on the assumption that all outcomes in the sample space are equally likely.  If an event E has equally likely outcomes and its sample space S has equally likely outcomes, the probability of event, , is      Probability of a Single Die Roll   A die is rolled. The set of equally likely outcomes is . Find the probability of rolling:    a 2  a number less than 4  a number greater than 7  a number less than 7         The outcomes are , so  There are no such outcomes, so  All outcomes are less than 7, so       Probability of a Pair of Dice   A single die is rolled twice. Find the probability of rolling:   two even numbers  two numbers whose sum is 6  two numbers whose sum exceeds 12  two prime numbers  two numbers whose sum is less than 7      Sample Space for Two Six-Sided Dice    Die 1 \\ 2  1 2 3  4 5 6    1  (1,1) (1,2) (1,3)  (1,4) (1,5) (1,6)    2  (2,1) (2,2) (2,3)  (2,4) (2,5) (2,6)    3  (3,1) (3,2) (3,3)  (3,4) (3,5) (3,6)    4  (4,1) (4,2) (4,3)  (4,4) (4,5) (4,6)    5  (5,1) (5,2) (5,3)  (5,4) (5,5) (5,6)    6  (6,1) (6,2) (6,3)  (6,4) (6,5) (6,6)       The even numbers on a die are . There are outcomes where both numbers are even. The probability is     The outcomes with a sum of 6 are . There are 5 such outcomes, so the probability is .    The maximum possible sum is . It is impossible for the sum to exceed 12. The probability is .    The prime numbers on a die are . There are outcomes where both numbers are prime. The probability is .    The outcomes with a sum less than 7 are:  Sum 2: (1,1) [1 outcome]  Sum 3: (1,2), (2,1) [2 outcomes]  Sum 4: (1,3), (2,2), (3,1) [3 outcomes]  Sum 5: (1,4), (2,3), (3,2), (4,1) [4 outcomes]  Sum 6: (1,5), (2,4), (3,3), (4,2), (5,1) [5 outcomes]  Total outcomes = . The probability is .       Probability of Drawing a Single deck of Cards   You are dealt one card from a standard 52-card deck. Find the probability of being dealt:   an ace  a red card  a red king  a spade  an even number heart  an odd number diamond  a face card    A standard deck of 52 playing cards.   A grid showing all 52 playing cards organized by suit: Clubs and Spades in black, Hearts and Diamonds in red.      There are 52 total outcomes in a standard deck.    There are 4 aces in a deck.    There are 26 red cards (hearts and diamonds).    There are 2 red kings (king of hearts and king of diamonds).    There are 13 spades in a deck.    The even numbered hearts are . There are 5 such cards.    The odd numbered diamonds (excluding face cards) are . (Note: Ace is usually not considered an odd number in this context, but if included, the count would be 5). Using , there are 4 such cards.    There are 12 face cards (Jack, Queen, King of each suit).       Probability of Three Coin Tosses   A fair coin is tossed three times in succession. The set of equally likely outcomes is . Find the probability of getting:   Exactly one tail.  Exactly 2 heads.  At least one head.  Five tails.      Tree diagram for three coin tosses      The total number of outcomes is 8.    The outcomes with exactly one tail are . There are 3 such outcomes, so .    The outcomes with exactly two heads are . There are 3 such outcomes, so .    The only outcome with no heads is . Therefore, there are outcomes with at least one head. .    It is impossible to get five tails in only three tosses. .       Probability of a Coin Toss and Die Roll   A coin is tossed and a die is rolled. The tree diagram below illustrates the sample space of 12 equally likely outcomes.   Tree diagram for tossing a coin and rolling a die.   A tree diagram starting from a point, splitting into Head and Tail. Each of those branches then splits into six branches numbered 1 through 6, ending in outcomes like (H, 1), (H, 2), etc.     Find the probability of getting:   a head and an even number.  a tail and a number less than 3.  a head and a number greater than 6.     The total number of equally likely outcomes is .    The outcomes for a head and an even number are . There are 3 such outcomes, so .    The outcomes for a tail and a number less than 3 are . There are 2 such outcomes, so .    Since a standard die only goes up to 6, it is impossible to roll a number greater than 6. The probability is .      "
},
{
  "id": "def-theoretical-probability",
  "level": "2",
  "url": "ch-Probability-3.html#def-theoretical-probability",
  "type": "Definition",
  "number": "3.1",
  "title": "Probability Formula.",
  "body": " Probability Formula   The theoretical probability of an event is a measure of how likely that event is to occur based on the assumption that all outcomes in the sample space are equally likely.  If an event E has equally likely outcomes and its sample space S has equally likely outcomes, the probability of event, , is    "
},
{
  "id": "ch-Probability-3-3",
  "level": "2",
  "url": "ch-Probability-3.html#ch-Probability-3-3",
  "type": "Example",
  "number": "3.2",
  "title": "Probability of a Single Die Roll.",
  "body": " Probability of a Single Die Roll   A die is rolled. The set of equally likely outcomes is . Find the probability of rolling:    a 2  a number less than 4  a number greater than 7  a number less than 7         The outcomes are , so  There are no such outcomes, so  All outcomes are less than 7, so     "
},
{
  "id": "ch-Probability-3-4",
  "level": "2",
  "url": "ch-Probability-3.html#ch-Probability-3-4",
  "type": "Example",
  "number": "3.3",
  "title": "Probability of a Pair of Dice.",
  "body": " Probability of a Pair of Dice   A single die is rolled twice. Find the probability of rolling:   two even numbers  two numbers whose sum is 6  two numbers whose sum exceeds 12  two prime numbers  two numbers whose sum is less than 7      Sample Space for Two Six-Sided Dice    Die 1 \\ 2  1 2 3  4 5 6    1  (1,1) (1,2) (1,3)  (1,4) (1,5) (1,6)    2  (2,1) (2,2) (2,3)  (2,4) (2,5) (2,6)    3  (3,1) (3,2) (3,3)  (3,4) (3,5) (3,6)    4  (4,1) (4,2) (4,3)  (4,4) (4,5) (4,6)    5  (5,1) (5,2) (5,3)  (5,4) (5,5) (5,6)    6  (6,1) (6,2) (6,3)  (6,4) (6,5) (6,6)       The even numbers on a die are . There are outcomes where both numbers are even. The probability is     The outcomes with a sum of 6 are . There are 5 such outcomes, so the probability is .    The maximum possible sum is . It is impossible for the sum to exceed 12. The probability is .    The prime numbers on a die are . There are outcomes where both numbers are prime. The probability is .    The outcomes with a sum less than 7 are:  Sum 2: (1,1) [1 outcome]  Sum 3: (1,2), (2,1) [2 outcomes]  Sum 4: (1,3), (2,2), (3,1) [3 outcomes]  Sum 5: (1,4), (2,3), (3,2), (4,1) [4 outcomes]  Sum 6: (1,5), (2,4), (3,3), (4,2), (5,1) [5 outcomes]  Total outcomes = . The probability is .     "
},
{
  "id": "ch-Probability-3-5",
  "level": "2",
  "url": "ch-Probability-3.html#ch-Probability-3-5",
  "type": "Example",
  "number": "3.5",
  "title": "Probability of Drawing a Single deck of Cards.",
  "body": " Probability of Drawing a Single deck of Cards   You are dealt one card from a standard 52-card deck. Find the probability of being dealt:   an ace  a red card  a red king  a spade  an even number heart  an odd number diamond  a face card    A standard deck of 52 playing cards.   A grid showing all 52 playing cards organized by suit: Clubs and Spades in black, Hearts and Diamonds in red.      There are 52 total outcomes in a standard deck.    There are 4 aces in a deck.    There are 26 red cards (hearts and diamonds).    There are 2 red kings (king of hearts and king of diamonds).    There are 13 spades in a deck.    The even numbered hearts are . There are 5 such cards.    The odd numbered diamonds (excluding face cards) are . (Note: Ace is usually not considered an odd number in this context, but if included, the count would be 5). Using , there are 4 such cards.    There are 12 face cards (Jack, Queen, King of each suit).     "
},
{
  "id": "ch-Probability-3-6",
  "level": "2",
  "url": "ch-Probability-3.html#ch-Probability-3-6",
  "type": "Example",
  "number": "3.7",
  "title": "Probability of Three Coin Tosses.",
  "body": " Probability of Three Coin Tosses   A fair coin is tossed three times in succession. The set of equally likely outcomes is . Find the probability of getting:   Exactly one tail.  Exactly 2 heads.  At least one head.  Five tails.      Tree diagram for three coin tosses      The total number of outcomes is 8.    The outcomes with exactly one tail are . There are 3 such outcomes, so .    The outcomes with exactly two heads are . There are 3 such outcomes, so .    The only outcome with no heads is . Therefore, there are outcomes with at least one head. .    It is impossible to get five tails in only three tosses. .     "
},
{
  "id": "ch-Probability-3-7",
  "level": "2",
  "url": "ch-Probability-3.html#ch-Probability-3-7",
  "type": "Checkpoint",
  "number": "3.9",
  "title": "Probability of a Coin Toss and Die Roll.",
  "body": " Probability of a Coin Toss and Die Roll   A coin is tossed and a die is rolled. The tree diagram below illustrates the sample space of 12 equally likely outcomes.   Tree diagram for tossing a coin and rolling a die.   A tree diagram starting from a point, splitting into Head and Tail. Each of those branches then splits into six branches numbered 1 through 6, ending in outcomes like (H, 1), (H, 2), etc.     Find the probability of getting:   a head and an even number.  a tail and a number less than 3.  a head and a number greater than 6.     The total number of equally likely outcomes is .    The outcomes for a head and an even number are . There are 3 such outcomes, so .    The outcomes for a tail and a number less than 3 are . There are 2 such outcomes, so .    Since a standard die only goes up to 6, it is impossible to roll a number greater than 6. The probability is .     "
},
{
  "id": "sec-events-not-or",
  "level": "1",
  "url": "sec-events-not-or.html",
  "type": "Section",
  "number": "",
  "title": "3.2 Events Involving NOT and OR",
  "body": " 3.2 Events Involving NOT and OR  A survey asked 500 Americans to rate their health. Of the surveyed, 270 rated their health as good\/excellent. This means that people surveyed did not rate their health as good\/excellent. In general, since the sum of probabilities of all possible outcomes in any situation is 1:    The Probability of an Event Not Occurring   The probability that an event will not occur is equal to 1 minus the probability that it will occur:       If you are dealt one card from a standard 52-card deck ( ), find the probability that you are not dealt a queen.    .      If you are dealt one card from a standard 52-card deck, find the probability that you are not dealt a diamond.    .     Mutually Exclusive Events   Two events are mutually exclusive if they cannot occur at the same time. In other words, if one event occurs, the other cannot occur.    Or Probabilities with Mutually Exclusive Events: If and are mutually exclusive events, then:       If one card is randomly selected from a deck of cards ( ), what is the probability of selecting a king or a queen?    These are mutually exclusive. .      If you roll a single, six-sided die, what is the probability of getting either a 4 or a 5?    .    If one card is randomly selected from a deck of cards ( ), what is the probability of selecting a diamond or a picture card? However, there are three cards that are simultaneously diamonds and picture cards . The events are not mutually exclusive.  To correct for the double-counting:    Events that are NOT Mutually Exclusive   If it is possible for events and to occur simultaneously, the events are said to be not mutually exclusive .  If and are not mutually exclusive events, then:       In a group of 50 students, 23 take math, 11 take psychology, and 7 take both. Find the probability that a randomly selected student takes math or psychology.    Let be the event that a student takes math, and be the event that a student takes psychology. We are given the following:  Total students:  Students in math:  Students in psychology:  Students in both:    To find the probability that a student takes math or psychology, we use the Addition Rule for Probability:   Substituting the known values as fractions of the total population:   Since the denominators are the same, we combine the numerators:   Thus, the probability that a randomly selected student takes math or psychology is (or ).    The following table shows the distribution of active duty personnel in the U.S. military (in thousands).   U.S. Military Personnel by Branch and Gender     Air Force  Army  Marine Corps  Navy  Total    Male  290  400  160  320  1,170    Female  70  70  10  50  200    Total  360  470  170  370  1,370       Using , find the probability that a person selected at random is in the Army or is a woman.    We use the Addition Rule for Probability:   From the table, we identify the following values:  Total Personnel:  Total in Army:  Total Female:  Females in the Army (the overlap):    Now, substitute these into the formula:   Simplifying the fraction, we get .      Using , find the probability that a person selected at random is in the Navy or is a man.    To find the probability of a person being in the Navy or a man, we apply the Addition Rule:   Identify the relevant values from the table:  Total Personnel:  Total in Navy:  Total Male:  Males in the Navy (the overlap):    Substitute the values:   Simplifying the fraction, we get .    "
},
{
  "id": "def-Not-probability",
  "level": "2",
  "url": "sec-events-not-or.html#def-Not-probability",
  "type": "Definition",
  "number": "3.11",
  "title": "The Probability of an Event Not Occurring.",
  "body": " The Probability of an Event Not Occurring   The probability that an event will not occur is equal to 1 minus the probability that it will occur:    "
},
{
  "id": "sec-events-not-or-4",
  "level": "2",
  "url": "sec-events-not-or.html#sec-events-not-or-4",
  "type": "Example",
  "number": "3.12",
  "title": "",
  "body": "  If you are dealt one card from a standard 52-card deck ( ), find the probability that you are not dealt a queen.    .   "
},
{
  "id": "sec-events-not-or-5",
  "level": "2",
  "url": "sec-events-not-or.html#sec-events-not-or-5",
  "type": "Checkpoint",
  "number": "3.13",
  "title": "",
  "body": "  If you are dealt one card from a standard 52-card deck, find the probability that you are not dealt a diamond.    .   "
},
{
  "id": "def-mutually-exclusive",
  "level": "2",
  "url": "sec-events-not-or.html#def-mutually-exclusive",
  "type": "Definition",
  "number": "3.14",
  "title": "Mutually Exclusive Events.",
  "body": " Mutually Exclusive Events   Two events are mutually exclusive if they cannot occur at the same time. In other words, if one event occurs, the other cannot occur.    Or Probabilities with Mutually Exclusive Events: If and are mutually exclusive events, then:    "
},
{
  "id": "sec-events-not-or-7",
  "level": "2",
  "url": "sec-events-not-or.html#sec-events-not-or-7",
  "type": "Example",
  "number": "3.15",
  "title": "",
  "body": "  If one card is randomly selected from a deck of cards ( ), what is the probability of selecting a king or a queen?    These are mutually exclusive. .   "
},
{
  "id": "sec-events-not-or-8",
  "level": "2",
  "url": "sec-events-not-or.html#sec-events-not-or-8",
  "type": "Checkpoint",
  "number": "3.16",
  "title": "",
  "body": "  If you roll a single, six-sided die, what is the probability of getting either a 4 or a 5?    .   "
},
{
  "id": "def-not-mutually-exclusive",
  "level": "2",
  "url": "sec-events-not-or.html#def-not-mutually-exclusive",
  "type": "Definition",
  "number": "3.17",
  "title": "Events that are NOT Mutually Exclusive.",
  "body": " Events that are NOT Mutually Exclusive   If it is possible for events and to occur simultaneously, the events are said to be not mutually exclusive .  If and are not mutually exclusive events, then:    "
},
{
  "id": "exercise-prob-math-psych",
  "level": "2",
  "url": "sec-events-not-or.html#exercise-prob-math-psych",
  "type": "Checkpoint",
  "number": "3.18",
  "title": "",
  "body": "  In a group of 50 students, 23 take math, 11 take psychology, and 7 take both. Find the probability that a randomly selected student takes math or psychology.    Let be the event that a student takes math, and be the event that a student takes psychology. We are given the following:  Total students:  Students in math:  Students in psychology:  Students in both:    To find the probability that a student takes math or psychology, we use the Addition Rule for Probability:   Substituting the known values as fractions of the total population:   Since the denominators are the same, we combine the numerators:   Thus, the probability that a randomly selected student takes math or psychology is (or ).   "
},
{
  "id": "table-military-personnel",
  "level": "2",
  "url": "sec-events-not-or.html#table-military-personnel",
  "type": "Table",
  "number": "3.19",
  "title": "U.S. Military Personnel by Branch and Gender",
  "body": " U.S. Military Personnel by Branch and Gender     Air Force  Army  Marine Corps  Navy  Total    Male  290  400  160  320  1,170    Female  70  70  10  50  200    Total  360  470  170  370  1,370    "
},
{
  "id": "sec-events-not-or-15",
  "level": "2",
  "url": "sec-events-not-or.html#sec-events-not-or-15",
  "type": "Checkpoint",
  "number": "3.20",
  "title": "",
  "body": "  Using , find the probability that a person selected at random is in the Army or is a woman.    We use the Addition Rule for Probability:   From the table, we identify the following values:  Total Personnel:  Total in Army:  Total Female:  Females in the Army (the overlap):    Now, substitute these into the formula:   Simplifying the fraction, we get .   "
},
{
  "id": "sec-events-not-or-16",
  "level": "2",
  "url": "sec-events-not-or.html#sec-events-not-or-16",
  "type": "Checkpoint",
  "number": "3.21",
  "title": "",
  "body": "  Using , find the probability that a person selected at random is in the Navy or is a man.    To find the probability of a person being in the Navy or a man, we apply the Addition Rule:   Identify the relevant values from the table:  Total Personnel:  Total in Navy:  Total Male:  Males in the Navy (the overlap):    Substitute the values:   Simplifying the fraction, we get .   "
},
{
  "id": "notes-fcp",
  "level": "1",
  "url": "notes-fcp.html",
  "type": "Section",
  "number": "",
  "title": "3.3 The Fundamental Counting Principle",
  "body": " 3.3 The Fundamental Counting Principle   The Fundamental Counting Principle is a powerful tool for counting the number of possible outcomes in a variety of situations. It allows us to determine the total number of combinations or arrangements by multiplying the number of choices for each independent event.   The probability of winning the top prize in the lottery is about the same as the probability of being struck by lightning. There are a million possible number combinations in the lottery games, and only one way of winning the grand prize.  We can generalize the idea to any two groups of items with the Fundamental Counting Principle .   The Fundamental Counting Principle   If there are ways to choose an item from one group and ways to choose an item from another group, then there are ways to choose one item from each group.     Restaurant two-course meal   The Greasy Spoon Restaurant offers 6 appetizers and 14 main courses. In how many ways can a person order a two-course meal?    Use the Fundamental Counting Principle: choose 1 appetizer and 1 main course.   There are 84 different two-course meals.     Two-course meal   The Diner offers 10 appetizers and 15 main courses. In how many ways can a person order a two-course meal?    Use the Fundamental Counting Principle and multiply the number of appetizers by the number of main courses.   There are 150 possible two-course meals.     Psychology and social science scheduling   This semester, you need to enroll in your required psychology and social science courses. Because you are registering early, you have 15 psychology sections to choose from. Additionally, there are 9 social science sections available that do not conflict with the psychology schedule. How many different two-course schedules can you create to fulfill these requirements?    Multiply the number of psychology section options by the number of social science section options.   There are 135 possible two-course schedules.     The Fundamental Counting Principle   If there are independent events and the first event can occur in ways, the second event can occur in ways, the third event can occur in ways, and so on, then the total number of ways that the events can occur is given by   by multiplying the number of ways each individual event can happen.     One-topping pizza choices   A pizza can be ordered with two choices of size (medium or large), three choices of crust (thin, thick or regular), and five choices of toppings (ground beef, sausage, pepperoni, bacon and mushrooms). How many different one-topping pizzas can be ordered?    Multiply the number of size choices by the number of crust choices and the number of topping choices.   There are 30 different one-topping pizzas.     Three-wheel car options   Car manufacturers are now experimenting with lightweight three-wheel cars, designed for one person and considered ideal for city driving. Suppose you could order such a car with a choice of 9 possible colors, with or without air conditioning, electric or gas powered, and with or without an on-board computer. In how many ways can this car be ordered with regard to these options?    Multiply the number of choices for each independent feature.   There are 72 possible car orders.     Ordering a customizable car   The car in Example is now available in 10 possible colors. The options involving air conditioning, power, and on-board computer still apply. Furthermore, the car is available with or without a global positioning system. In how many ways can this car be ordered in terms of these options?    Multiply the number of choices for each independent option.   There are 160 possible car orders.     Ten-question multiple-choice test   You are taking a multiple-choice test that has ten questions. Each of the questions has four answer choices, with one correct answer per question. If you select one of these four choices for each question and leave nothing blank, in how many ways can you answer the questions?    This situation involves making choices with ten questions.   We use the Fundamental Counting Principle to find the number of ways that you can answer the questions on the test. Multiply the number of choices, 4, for each of the ten questions.      Exercises for Practice   Six-question multiple-choice test   You are taking a multiple-choice test that has six questions. Each of the questions has three answer choices, with one correct answer per question. If you select one of these three choices for each question and leave nothing blank, in how many ways can you answer the questions?    Multiply the number of choices for each question.   There are 729 possible answer sheets.     Telephone number possibilities   Telephone numbers in the United States begin with three-digit area codes followed by seven-digit local telephone numbers. Area codes and local telephone numbers cannot begin with 0 or 1. How many different telephone numbers are possible?    There are 8 choices for the first digit of the area code and 10 choices for each remaining area code digit. For the local number, the first digit also has 8 choices and each remaining digit has 10 choices.   There are 6,400,000,000 possible telephone numbers.     Pen choices   A popular type of pen comes in red, blue, or black ink. The writing tip varies from extra bold, bold, regular, fine, or micro. How many different choices of pens do you have with this type of pen?    Multiply the ink color choices by the tip style choices.   There are 15 different pen choices.     Catered meal combinations   A wedding caterer gives you three choices for the main course, six starter choices and five options for dessert. How many different meals (made up of starter, dinner and dessert) are there?    Multiply the number of starter choices, main course choices, and dessert choices.   There are 90 different meals.     Yes\/no survey   You take a survey with five \"yes\" or \"no\" answers. How many different ways could you complete the survey?    Each question has 2 choices, and the choices are independent.   There are 32 different ways to complete the survey.     Product code possibilities   A company puts a code on each different product they sell. The code is made up of 3 numbers and 2 letters. How many different codes are possible?    Each number can be one of 10 digits, and each letter can be one of 26 letters.   There are 676,000 different product codes possible.     "
},
{
  "id": "definition-fundamental-counting-two-groups",
  "level": "2",
  "url": "notes-fcp.html#definition-fundamental-counting-two-groups",
  "type": "Definition",
  "number": "3.22",
  "title": "The Fundamental Counting Principle.",
  "body": " The Fundamental Counting Principle   If there are ways to choose an item from one group and ways to choose an item from another group, then there are ways to choose one item from each group.   "
},
{
  "id": "example-two-course-meal-1",
  "level": "2",
  "url": "notes-fcp.html#example-two-course-meal-1",
  "type": "Example",
  "number": "3.23",
  "title": "Restaurant two-course meal.",
  "body": " Restaurant two-course meal   The Greasy Spoon Restaurant offers 6 appetizers and 14 main courses. In how many ways can a person order a two-course meal?    Use the Fundamental Counting Principle: choose 1 appetizer and 1 main course.   There are 84 different two-course meals.   "
},
{
  "id": "exercise-two-course-meal",
  "level": "2",
  "url": "notes-fcp.html#exercise-two-course-meal",
  "type": "Checkpoint",
  "number": "3.24",
  "title": "Two-course meal.",
  "body": " Two-course meal   The Diner offers 10 appetizers and 15 main courses. In how many ways can a person order a two-course meal?    Use the Fundamental Counting Principle and multiply the number of appetizers by the number of main courses.   There are 150 possible two-course meals.   "
},
{
  "id": "exercise-course-schedule",
  "level": "2",
  "url": "notes-fcp.html#exercise-course-schedule",
  "type": "Checkpoint",
  "number": "3.25",
  "title": "Psychology and social science scheduling.",
  "body": " Psychology and social science scheduling   This semester, you need to enroll in your required psychology and social science courses. Because you are registering early, you have 15 psychology sections to choose from. Additionally, there are 9 social science sections available that do not conflict with the psychology schedule. How many different two-course schedules can you create to fulfill these requirements?    Multiply the number of psychology section options by the number of social science section options.   There are 135 possible two-course schedules.   "
},
{
  "id": "definition-fundamental-counting-multiple-events",
  "level": "2",
  "url": "notes-fcp.html#definition-fundamental-counting-multiple-events",
  "type": "Definition",
  "number": "3.26",
  "title": "The Fundamental Counting Principle.",
  "body": " The Fundamental Counting Principle   If there are independent events and the first event can occur in ways, the second event can occur in ways, the third event can occur in ways, and so on, then the total number of ways that the events can occur is given by   by multiplying the number of ways each individual event can happen.   "
},
{
  "id": "example-one-topping-pizza",
  "level": "2",
  "url": "notes-fcp.html#example-one-topping-pizza",
  "type": "Example",
  "number": "3.27",
  "title": "One-topping pizza choices.",
  "body": " One-topping pizza choices   A pizza can be ordered with two choices of size (medium or large), three choices of crust (thin, thick or regular), and five choices of toppings (ground beef, sausage, pepperoni, bacon and mushrooms). How many different one-topping pizzas can be ordered?    Multiply the number of size choices by the number of crust choices and the number of topping choices.   There are 30 different one-topping pizzas.   "
},
{
  "id": "example-three-wheel-car-options",
  "level": "2",
  "url": "notes-fcp.html#example-three-wheel-car-options",
  "type": "Example",
  "number": "3.28",
  "title": "Three-wheel car options.",
  "body": " Three-wheel car options   Car manufacturers are now experimenting with lightweight three-wheel cars, designed for one person and considered ideal for city driving. Suppose you could order such a car with a choice of 9 possible colors, with or without air conditioning, electric or gas powered, and with or without an on-board computer. In how many ways can this car be ordered with regard to these options?    Multiply the number of choices for each independent feature.   There are 72 possible car orders.   "
},
{
  "id": "exercise-car-ordering-with-gps",
  "level": "2",
  "url": "notes-fcp.html#exercise-car-ordering-with-gps",
  "type": "Checkpoint",
  "number": "3.29",
  "title": "Ordering a customizable car.",
  "body": " Ordering a customizable car   The car in Example is now available in 10 possible colors. The options involving air conditioning, power, and on-board computer still apply. Furthermore, the car is available with or without a global positioning system. In how many ways can this car be ordered in terms of these options?    Multiply the number of choices for each independent option.   There are 160 possible car orders.   "
},
{
  "id": "example-ten-question-test",
  "level": "2",
  "url": "notes-fcp.html#example-ten-question-test",
  "type": "Example",
  "number": "3.30",
  "title": "Ten-question multiple-choice test.",
  "body": " Ten-question multiple-choice test   You are taking a multiple-choice test that has ten questions. Each of the questions has four answer choices, with one correct answer per question. If you select one of these four choices for each question and leave nothing blank, in how many ways can you answer the questions?    This situation involves making choices with ten questions.   We use the Fundamental Counting Principle to find the number of ways that you can answer the questions on the test. Multiply the number of choices, 4, for each of the ten questions.    "
},
{
  "id": "exercise-six-question-test",
  "level": "2",
  "url": "notes-fcp.html#exercise-six-question-test",
  "type": "Exercise",
  "number": "1",
  "title": "Six-question multiple-choice test.",
  "body": " Six-question multiple-choice test   You are taking a multiple-choice test that has six questions. Each of the questions has three answer choices, with one correct answer per question. If you select one of these three choices for each question and leave nothing blank, in how many ways can you answer the questions?    Multiply the number of choices for each question.   There are 729 possible answer sheets.   "
},
{
  "id": "exercise-telephone-numbers",
  "level": "2",
  "url": "notes-fcp.html#exercise-telephone-numbers",
  "type": "Exercise",
  "number": "2",
  "title": "Telephone number possibilities.",
  "body": " Telephone number possibilities   Telephone numbers in the United States begin with three-digit area codes followed by seven-digit local telephone numbers. Area codes and local telephone numbers cannot begin with 0 or 1. How many different telephone numbers are possible?    There are 8 choices for the first digit of the area code and 10 choices for each remaining area code digit. For the local number, the first digit also has 8 choices and each remaining digit has 10 choices.   There are 6,400,000,000 possible telephone numbers.   "
},
{
  "id": "exercise-pen-choices",
  "level": "2",
  "url": "notes-fcp.html#exercise-pen-choices",
  "type": "Exercise",
  "number": "3",
  "title": "Pen choices.",
  "body": " Pen choices   A popular type of pen comes in red, blue, or black ink. The writing tip varies from extra bold, bold, regular, fine, or micro. How many different choices of pens do you have with this type of pen?    Multiply the ink color choices by the tip style choices.   There are 15 different pen choices.   "
},
{
  "id": "exercise-catered-meal-combinations",
  "level": "2",
  "url": "notes-fcp.html#exercise-catered-meal-combinations",
  "type": "Exercise",
  "number": "4",
  "title": "Catered meal combinations.",
  "body": " Catered meal combinations   A wedding caterer gives you three choices for the main course, six starter choices and five options for dessert. How many different meals (made up of starter, dinner and dessert) are there?    Multiply the number of starter choices, main course choices, and dessert choices.   There are 90 different meals.   "
},
{
  "id": "exercise-yes-no-survey",
  "level": "2",
  "url": "notes-fcp.html#exercise-yes-no-survey",
  "type": "Exercise",
  "number": "5",
  "title": "Yes\/no survey.",
  "body": " Yes\/no survey   You take a survey with five \"yes\" or \"no\" answers. How many different ways could you complete the survey?    Each question has 2 choices, and the choices are independent.   There are 32 different ways to complete the survey.   "
},
{
  "id": "exercise-product-code-possibilities",
  "level": "2",
  "url": "notes-fcp.html#exercise-product-code-possibilities",
  "type": "Exercise",
  "number": "6",
  "title": "Product code possibilities.",
  "body": " Product code possibilities   A company puts a code on each different product they sell. The code is made up of 3 numbers and 2 letters. How many different codes are possible?    Each number can be one of 10 digits, and each letter can be one of 26 letters.   There are 676,000 different product codes possible.   "
},
{
  "id": "notes-factorials",
  "level": "1",
  "url": "notes-factorials.html",
  "type": "Section",
  "number": "",
  "title": "3.4 Factorials",
  "body": " 3.4 Factorials   In this section, we will explore the concept of factorials and how they are used in combinatorial counting problems. Factorials are a fundamental tool in counting arrangements and selections, and they play a crucial role in the formulas for permutations and combinations. We will define what a factorial is, how to compute it, and how to apply it in various counting scenarios.    Factorials  Factorials are a fundamental concept in combinatorics and play a crucial role in counting problems. The factorial of a positive integer , denoted as , is the product of all positive integers from down to 1. For example,   By definition, is equal to 1.  Factorials are used in various counting problems, such as permutations and combinations, where we need to count the number of ways to arrange or select items. In the following sections, we will explore how factorials are applied in these contexts and how they can help us solve complex counting problems.  If is a positive integer, then ( factorial ) is the product of all positive integers from down through 1.   By definition, is 1.    Factorial formula   The factorial of is   And by definition, .     Evaluate factorial expressions   Evaluate the following factorial expressions without using the factorial key on your calculator.                Expand both factorials completely to show the common factors: After canceling the common factors from the top and bottom:     Since the denominator is larger, the remaining factors will be in the denominator:          Expand both factorials completely: After canceling the common factors :               First, simplify the expression inside the parentheses:     Recall that :        Permutations of duplicate items   The number of permutations of items, where items are identical, items are identical, items are identical, items are identical, and so on, is given by      Arrange MISSISSIPPI   In how many distinct ways can the letters of the word \"MISSISSIPPI\" be arranged?    The word has 11 letters with 4 identical I's, 4 identical S's, and 2 identical P's.      Arrange BANANA   In how many distinct ways can the letters of the word \"BANANA\" be arranged?    The word has 6 letters with 3 identical A's and 2 identical N's.      Arrange MASSACHUSETTS   In how many distinct ways can the letters of the word \"MASSACHUSETTS\" be arranged?    The word has 13 letters with 4 identical S's, 2 identical A's, and 2 identical T's.      Arrange balloons   There are seventeen balloons: 3 blue, 5 red, 2 green, 3 yellow, and 4 orange. In how many distinct ways can the balloons be arranged?    There are 17 total balloons with duplicates in several colors.     "
},
{
  "id": "definition-factorial-expression",
  "level": "2",
  "url": "notes-factorials.html#definition-factorial-expression",
  "type": "Definition",
  "number": "3.31",
  "title": "Factorial formula.",
  "body": " Factorial formula   The factorial of is   And by definition, .   "
},
{
  "id": "example-evaluate-factorial-expressions",
  "level": "2",
  "url": "notes-factorials.html#example-evaluate-factorial-expressions",
  "type": "Example",
  "number": "3.32",
  "title": "Evaluate factorial expressions.",
  "body": " Evaluate factorial expressions   Evaluate the following factorial expressions without using the factorial key on your calculator.                Expand both factorials completely to show the common factors: After canceling the common factors from the top and bottom:     Since the denominator is larger, the remaining factors will be in the denominator:          Expand both factorials completely: After canceling the common factors :               First, simplify the expression inside the parentheses:     Recall that :      "
},
{
  "id": "definition-permutations-duplicate",
  "level": "2",
  "url": "notes-factorials.html#definition-permutations-duplicate",
  "type": "Definition",
  "number": "3.33",
  "title": "Permutations of duplicate items.",
  "body": " Permutations of duplicate items   The number of permutations of items, where items are identical, items are identical, items are identical, items are identical, and so on, is given by    "
},
{
  "id": "example-arrange-mississippi",
  "level": "2",
  "url": "notes-factorials.html#example-arrange-mississippi",
  "type": "Example",
  "number": "3.34",
  "title": "Arrange MISSISSIPPI.",
  "body": " Arrange MISSISSIPPI   In how many distinct ways can the letters of the word \"MISSISSIPPI\" be arranged?    The word has 11 letters with 4 identical I's, 4 identical S's, and 2 identical P's.    "
},
{
  "id": "example-arrange-banana",
  "level": "2",
  "url": "notes-factorials.html#example-arrange-banana",
  "type": "Example",
  "number": "3.35",
  "title": "Arrange BANANA.",
  "body": " Arrange BANANA   In how many distinct ways can the letters of the word \"BANANA\" be arranged?    The word has 6 letters with 3 identical A's and 2 identical N's.    "
},
{
  "id": "exercise-arrange-massachusetts",
  "level": "2",
  "url": "notes-factorials.html#exercise-arrange-massachusetts",
  "type": "Checkpoint",
  "number": "3.36",
  "title": "Arrange MASSACHUSETTS.",
  "body": " Arrange MASSACHUSETTS   In how many distinct ways can the letters of the word \"MASSACHUSETTS\" be arranged?    The word has 13 letters with 4 identical S's, 2 identical A's, and 2 identical T's.    "
},
{
  "id": "exercise-arrange-balloons",
  "level": "2",
  "url": "notes-factorials.html#exercise-arrange-balloons",
  "type": "Checkpoint",
  "number": "3.37",
  "title": "Arrange balloons.",
  "body": " Arrange balloons   There are seventeen balloons: 3 blue, 5 red, 2 green, 3 yellow, and 4 orange. In how many distinct ways can the balloons be arranged?    There are 17 total balloons with duplicates in several colors.    "
},
{
  "id": "sec-permutations",
  "level": "1",
  "url": "sec-permutations.html",
  "type": "Section",
  "number": "",
  "title": "3.5 Permutations",
  "body": " 3.5 Permutations   Permutation   A permutation is an ordered arrangement of items that occurs when:  No item is used more than once.  The order of arrangement makes a difference.        The BTS Concert Permutation Problem   Suppose BTS, Blackstreet Boys, NSYNC and TLC are given a no-contact concert series. You decide that BTS should be the last group to perform at the four-group concert. Given this decision, in how many ways can you put together the concert?    You can choose any one of the three groups (Blackstreet Boys, NSYNC, or TLC) as the opening act. Once you have chosen the first group, you will then have two groups left to choose for the second performance. You will then have just one group left to choose for the third performance. There is also just one choice for the closing act: BTS.   Concert Performance Choices    First Group to perform  Second Group to perform  Third Group to perform  Last Group to perform    3 choices  2 choices  1 choice  1 choice    Blackstreet Boys, NSYNC, TLC      BTS     We use the Fundamental Counting Principle to find the number of ways you can put together the concert. Multiply the choices: Thus, there are six different ways to arrange the concert if BTS is the final group to perform.      Arrange books on a shelf   You need to arrange five books along a small shelf. How many different ways can you arrange the books, assuming that the order of the books makes a difference to you?    There are 5 choices for the first position, 4 for the second, 3 for the third, 2 for the fourth, and 1 for the last. Using the Fundamental Counting Principle: There are 120 different ways to arrange the books.       In how many different ways can a police department arrange eight suspects in a police lineup if each lineup contains all eight people?    Since all 8 people are used and order matters, this is a permutation of 8 items taken 8 at a time: There are 40,320 different ways to arrange the lineup.       If five digits 1, 2, 3, 4, 5 are being given and a three-digit code has to be made from it if the repetition of digits is allowed then how many such codes can be formed?    Because repetition is allowed, there are 5 choices for each of the three positions in the code: There are 125 possible codes.     Baseball Batting Lineup   The following examples will show how to calculate permutations.    You are the coach of a 13-player baseball team and must set a 9-player batting lineup. Because different positions in the lineup carry different responsibilities, the order makes a difference . For example, a strong hitter like Barry in the clean-up spot ( fourth) drives in more runs than a home run later in the order. How many different ways can you arrange your 9 starters?    You have 13 players to choose from for the first person at bat. This leaves 12 players for the second position, 11 for the third, and so on, until the 9th position. The total number of batting orders is: There are nearly 260 million possible batting orders for a team of 13 players.  We can derive a general formula for permutations by rewriting this calculation as a fraction of factorials:   Using standard notation, we call this the number of permutations of 13 things taken 9 at a time, written as:      Calculator Note: Using the TI-30XIIS    TI-30XIIS Calculator   A screenshot of the TI-30XIIS calculator showing the permutation function.     To evaluate on the TI-30XIIS, follow these steps:  Enter the value of : Type 13 .  Press the PRB key.  The menu will display nPr  nCr  ! . Since nPr is already underlined, simply press ENTER .  Enter the value of : Type 9 .  Press ENTER to get the result: 259,459,200 .      Permutation Formula   The notation means the number of permutations of things taken at a time :      Corporate Board Elections   A corporation has seven members on its board of directors. In how many different ways can the board elect a president, vice-president, secretary, and treasurer?    Since each officer holds a specific title, the order of selection matters. We are looking for the number of permutations of 7 items taken 4 at a time: Expanding the factorials, we get: The board can elect the four officers in 840 different ways.   TI-30XIIS Keystrokes: To calculate this on your TI-30XIIS: Type 7  Press PRB  Select nPr and press ENTER  Type 4  Press ENTER .       How many different programming schedules can be arranged by choosing 5 situation comedies from a collection of 9 classic sitcoms?    We are choosing items from a set of where order matters: There are 15,120 possible programming schedules.   TI-30XIIS Keystrokes: To calculate this on your TI-30XIIS: Type 9  Press PRB  Select nPr and press ENTER  Type 5  Press ENTER .       In a race in which six automobiles are entered and there are no ties, in how many ways can the first three finishers come in?    We are looking for the number of permutations of 6 cars taken 3 at a time: There are 120 ways the first three finishers can come in.       Five singers are to perform on a weekend evening at a night club. How many different ways are there to schedule their appearances?    This is a permutation of all 5 singers: There are 120 different scheduling arrangements.       A stock can go up, go down, or stay unchanged. How many possibilities are there if you own seven stocks?    Each of the 7 stocks has 3 possible outcomes. Since the outcome of one stock is independent of the others and order (which stock does what) matters: There are 2,187 different possibilities for the seven stocks.       Seven seats are positioned in a row at a movie theater. Alice, Betty, Craig, Dan, Evelyn, Frank, and Gavin want to sit together.   How many different ways can they be arranged?  How many different ways can they be arranged if Betty sits in the second seat?  How many different ways can they be arranged if Craig and Gavin want to sit in the two aisle seats?        Total arrangements of 7 people: .    If Betty is fixed in the second seat, we only need to arrange the remaining 6 people in the remaining 6 seats: .    There are two aisle seats (the first and the last). First, arrange Craig and Gavin in those 2 seats: ways (Craig-Gavin or Gavin-Craig). Then, arrange the remaining 5 people in the middle 5 seats: . Total: .       "
},
{
  "id": "def-permutation",
  "level": "2",
  "url": "sec-permutations.html#def-permutation",
  "type": "Definition",
  "number": "3.38",
  "title": "Permutation.",
  "body": " Permutation   A permutation is an ordered arrangement of items that occurs when:  No item is used more than once.  The order of arrangement makes a difference.     "
},
{
  "id": "example-concert-lineup",
  "level": "2",
  "url": "sec-permutations.html#example-concert-lineup",
  "type": "Example",
  "number": "3.39",
  "title": "The BTS Concert Permutation Problem.",
  "body": " The BTS Concert Permutation Problem   Suppose BTS, Blackstreet Boys, NSYNC and TLC are given a no-contact concert series. You decide that BTS should be the last group to perform at the four-group concert. Given this decision, in how many ways can you put together the concert?    You can choose any one of the three groups (Blackstreet Boys, NSYNC, or TLC) as the opening act. Once you have chosen the first group, you will then have two groups left to choose for the second performance. You will then have just one group left to choose for the third performance. There is also just one choice for the closing act: BTS.   Concert Performance Choices    First Group to perform  Second Group to perform  Third Group to perform  Last Group to perform    3 choices  2 choices  1 choice  1 choice    Blackstreet Boys, NSYNC, TLC      BTS     We use the Fundamental Counting Principle to find the number of ways you can put together the concert. Multiply the choices: Thus, there are six different ways to arrange the concert if BTS is the final group to perform.   "
},
{
  "id": "sec-permutations-4",
  "level": "2",
  "url": "sec-permutations.html#sec-permutations-4",
  "type": "Example",
  "number": "3.41",
  "title": "Arrange books on a shelf.",
  "body": " Arrange books on a shelf   You need to arrange five books along a small shelf. How many different ways can you arrange the books, assuming that the order of the books makes a difference to you?    There are 5 choices for the first position, 4 for the second, 3 for the third, 2 for the fourth, and 1 for the last. Using the Fundamental Counting Principle: There are 120 different ways to arrange the books.   "
},
{
  "id": "sec-permutations-5",
  "level": "2",
  "url": "sec-permutations.html#sec-permutations-5",
  "type": "Checkpoint",
  "number": "3.42",
  "title": "",
  "body": "  In how many different ways can a police department arrange eight suspects in a police lineup if each lineup contains all eight people?    Since all 8 people are used and order matters, this is a permutation of 8 items taken 8 at a time: There are 40,320 different ways to arrange the lineup.   "
},
{
  "id": "sec-permutations-6",
  "level": "2",
  "url": "sec-permutations.html#sec-permutations-6",
  "type": "Checkpoint",
  "number": "3.43",
  "title": "",
  "body": "  If five digits 1, 2, 3, 4, 5 are being given and a three-digit code has to be made from it if the repetition of digits is allowed then how many such codes can be formed?    Because repetition is allowed, there are 5 choices for each of the three positions in the code: There are 125 possible codes.   "
},
{
  "id": "example-baseball-lineup",
  "level": "2",
  "url": "sec-permutations.html#example-baseball-lineup",
  "type": "Example",
  "number": "3.44",
  "title": "Baseball Batting Lineup.",
  "body": " Baseball Batting Lineup   The following examples will show how to calculate permutations.    You are the coach of a 13-player baseball team and must set a 9-player batting lineup. Because different positions in the lineup carry different responsibilities, the order makes a difference . For example, a strong hitter like Barry in the clean-up spot ( fourth) drives in more runs than a home run later in the order. How many different ways can you arrange your 9 starters?    You have 13 players to choose from for the first person at bat. This leaves 12 players for the second position, 11 for the third, and so on, until the 9th position. The total number of batting orders is: There are nearly 260 million possible batting orders for a team of 13 players.  We can derive a general formula for permutations by rewriting this calculation as a fraction of factorials:   Using standard notation, we call this the number of permutations of 13 things taken 9 at a time, written as:    "
},
{
  "id": "sec-permutations-8",
  "level": "2",
  "url": "sec-permutations.html#sec-permutations-8",
  "type": "Note",
  "number": "3.45",
  "title": "Calculator Note: Using the TI-30XIIS.",
  "body": " Calculator Note: Using the TI-30XIIS    TI-30XIIS Calculator   A screenshot of the TI-30XIIS calculator showing the permutation function.     To evaluate on the TI-30XIIS, follow these steps:  Enter the value of : Type 13 .  Press the PRB key.  The menu will display nPr  nCr  ! . Since nPr is already underlined, simply press ENTER .  Enter the value of : Type 9 .  Press ENTER to get the result: 259,459,200 .    "
},
{
  "id": "def-permutation-formula",
  "level": "2",
  "url": "sec-permutations.html#def-permutation-formula",
  "type": "Definition",
  "number": "3.47",
  "title": "Permutation Formula.",
  "body": " Permutation Formula   The notation means the number of permutations of things taken at a time :    "
},
{
  "id": "example-board-elections",
  "level": "2",
  "url": "sec-permutations.html#example-board-elections",
  "type": "Example",
  "number": "3.48",
  "title": "Corporate Board Elections.",
  "body": " Corporate Board Elections   A corporation has seven members on its board of directors. In how many different ways can the board elect a president, vice-president, secretary, and treasurer?    Since each officer holds a specific title, the order of selection matters. We are looking for the number of permutations of 7 items taken 4 at a time: Expanding the factorials, we get: The board can elect the four officers in 840 different ways.   TI-30XIIS Keystrokes: To calculate this on your TI-30XIIS: Type 7  Press PRB  Select nPr and press ENTER  Type 4  Press ENTER .   "
},
{
  "id": "sec-permutations-11",
  "level": "2",
  "url": "sec-permutations.html#sec-permutations-11",
  "type": "Checkpoint",
  "number": "3.49",
  "title": "",
  "body": "  How many different programming schedules can be arranged by choosing 5 situation comedies from a collection of 9 classic sitcoms?    We are choosing items from a set of where order matters: There are 15,120 possible programming schedules.   TI-30XIIS Keystrokes: To calculate this on your TI-30XIIS: Type 9  Press PRB  Select nPr and press ENTER  Type 5  Press ENTER .   "
},
{
  "id": "sec-permutations-12",
  "level": "2",
  "url": "sec-permutations.html#sec-permutations-12",
  "type": "Checkpoint",
  "number": "3.50",
  "title": "",
  "body": "  In a race in which six automobiles are entered and there are no ties, in how many ways can the first three finishers come in?    We are looking for the number of permutations of 6 cars taken 3 at a time: There are 120 ways the first three finishers can come in.   "
},
{
  "id": "sec-permutations-13",
  "level": "2",
  "url": "sec-permutations.html#sec-permutations-13",
  "type": "Checkpoint",
  "number": "3.51",
  "title": "",
  "body": "  Five singers are to perform on a weekend evening at a night club. How many different ways are there to schedule their appearances?    This is a permutation of all 5 singers: There are 120 different scheduling arrangements.   "
},
{
  "id": "sec-permutations-14",
  "level": "2",
  "url": "sec-permutations.html#sec-permutations-14",
  "type": "Checkpoint",
  "number": "3.52",
  "title": "",
  "body": "  A stock can go up, go down, or stay unchanged. How many possibilities are there if you own seven stocks?    Each of the 7 stocks has 3 possible outcomes. Since the outcome of one stock is independent of the others and order (which stock does what) matters: There are 2,187 different possibilities for the seven stocks.   "
},
{
  "id": "sec-permutations-15",
  "level": "2",
  "url": "sec-permutations.html#sec-permutations-15",
  "type": "Checkpoint",
  "number": "3.53",
  "title": "",
  "body": "  Seven seats are positioned in a row at a movie theater. Alice, Betty, Craig, Dan, Evelyn, Frank, and Gavin want to sit together.   How many different ways can they be arranged?  How many different ways can they be arranged if Betty sits in the second seat?  How many different ways can they be arranged if Craig and Gavin want to sit in the two aisle seats?        Total arrangements of 7 people: .    If Betty is fixed in the second seat, we only need to arrange the remaining 6 people in the remaining 6 seats: .    There are two aisle seats (the first and the last). First, arrange Craig and Gavin in those 2 seats: ways (Craig-Gavin or Gavin-Craig). Then, arrange the remaining 5 people in the middle 5 seats: . Total: .      "
},
{
  "id": "sec-combinations",
  "level": "1",
  "url": "sec-combinations.html",
  "type": "Section",
  "number": "",
  "title": "3.6 Combinations",
  "body": " 3.6 Combinations   Combination   A combination of items occurs when:  The items are selected from the same group.  No item is used more than once.  The order of items makes no difference .       Identifying Permutations and Combinations   For each of the following, determine whether the problem involves permutations or combinations:   How many ways can you select 6 free videos from a list of 200 videos?  In a race with 50 runners and no ties, in how many ways can the first three finishers come in?  Baskin-Robbins offers 31 different flavors of ice cream. One item is a bowl consisting of three scoops, each a different flavor. How many such bowls are possible?  A three-person committee is needed to study the possibility of expanding the neighborhood park. How many different committees could be formed from six people?       Combination : the order of the selected videos does not matter; only which 6 are chosen matters.  Permutation : first, second, and third place are distinct positions, so order matters.  Combination : the bowl is defined by the set of three flavors, and swapping flavors produces the same bowl.  Combination : the committee members are chosen without ordered roles.       The Combination Formula   The number of combinations of things taken at a time is denoted by :        Public Transportation Committee   A three-person committee is needed to study ways of improving public transportation. How many committees could be formed from the eight people on the board of supervisors?    This is a combination because the order of committee members does not matter.  Compute .  Simplify:   There are 56 possible committees.   TI-30XIIS Keystrokes: To calculate this on your TI-30XIIS: Type 8  Press PRB , use the arrow keys to underline nCr , press ENTER  Type 3  Press ENTER again to get the result of 56.     Pet Combinations   You are volunteering to pet-sit for a friend who has seven different animals. How many different pet combinations are possible if you take three of the seven pets?    Order does not matter when choosing pets for a group, so use combinations.      TI-30XIIS Keystrokes: To calculate this on your TI-30XIIS: Type 7  Press PRB , use the arrow keys to underline nCr , press ENTER  Type 3  Press ENTER again to get the result of 35.     Four-Card Hand   How many different 4-card hands can be dealt from a deck that has 16 different cards?    A hand is a combination because the order of the cards does not matter.        Poker Hands   In poker, a person is dealt 5 cards from a standard 52-card deck ( ). The order in which the cards are dealt does not matter. How many different 5-card poker hands are possible?    Use combinations because only the set of cards matters.      TI-30XIIS Keystrokes: To calculate this on your TI-30XIIS: Type 52  Press PRB , use the arrow keys to underline nCr , press ENTER  Type 5  Press ENTER again to get the result of 2,598,960.     Senate Committee Selection   The U.S. Senate of the 107th Congress consisted of 50 Democrats, 49 Republicans, and one independent. How many committees can be formed if each committee must have 3 Democrats and 2 Republicans?    Use combinations because the order of committee members does not matter.  Choose 3 Democrats from 50: .  Choose 2 Republicans from 49: .  Total committees:    TI-30XIIS Keystrokes: To calculate : Type 50  Press PRB , use the arrow keys to underline nCr , press ENTER  Type 3  Press ENTER . Repeat the process for and multiply the results.     Practice Problems   Answer the following problems. Identify whether each situation uses combinations, permutations, or the product rule, and then compute the requested count.   A popular brand of pen is available in three colors and four writing tips. How many different choices of pens do you have with this brand?  How many four-digit odd numbers are there?  An election ballot asks voters to select three city commissioners from a group of eight candidates. In how many ways can this be done?  Six singers are to perform on a weekend evening at a nightclub. How many different ways are there to schedule their appearances?  In how many ways can you arrange six books along a shelf, assuming that the order of the books makes a difference?  An ice cream store sells two drinks in four sizes and five flavors. In how many ways can a customer order a drink?  An electronic gate can be opened by entering five digits on a keypad containing the digits 0–9. How many different keypad sequences are possible if the digit 0 cannot be used as the first digit?  A math exam consists of 10 multiple-choice questions and 5 open-ended problems in which all work must be shown. If a student must answer 8 of the multiple-choice questions and 3 of the open-ended problems, in how many ways can the questions and problems be chosen?  For a temporary job, you are painting parking spaces for a new shopping mall with a letter of the alphabet and a single digit from 1 to 9. The first parking space is A1 and the last parking space is Z9. How many parking spaces can you paint with distinct labels?  In a race with 100 runners and no ties, in how many ways can the first three finishers come in?  Six people are on the board of supervisors for your neighborhood park. A three-person committee is needed to study the possibility of expanding the park. How many different committees could be formed from the six people?  Nine comedy acts will perform over two evenings. Five of the acts will perform on the first evening. How many ways can the schedule for the first evening be made?  To win Mega Millions, you must pick 5 numbers from a collection of 56 and one Megaball number from a collection of 46. The order of the first 5 does not matter. How many different selections are possible?  An exam consists of 20 multiple-choice questions and 10 open-ended problems. If a student must answer 15 of the multiple-choice and 5 of the open-ended questions, in how many ways can the questions and problems be chosen?  In a lucky draw, 10 names are placed in a box and three are drawn. Find the number of ways those three names can be selected.        Since we are making two independent choices (brand and color), we use the Product Rule . Multiply the number of brand options by the number of color options:     We use the Fundamental Counting Principle for each of the four digits:  First digit (1-9): 9 choices  Middle digits (0-9): 10 choices each  Last digit (odd): 5 choices (1, 3, 5, 7, 9)       This is a combination because the order of committee members does not matter.     This is a permutation of all 6 distinct subjects.     Arranging all items in a row is a permutation .     By the Product Rule , multiply the choices for size, caffeine, and flavor:     The first digit cannot be zero (9 choices), and the remaining four digits can be any number 0-9 (10 choices each):     Select the items separately then multiply:      Multiply the number of letter options by the number of digit options:     Since the positions (President, VP, Secretary) are distinct, order matters; this is a permutation .     Choosing a subgroup where order is irrelevant is a combination .     Select 5 players from 9 without regard to order:     First, calculate the combinations for the 5 white balls, then multiply by the Megaball choice:      Calculate the ways to choose the two groups separately:      Selecting a group of 3 from 10 is a combination :        "
},
{
  "id": "def-combination",
  "level": "2",
  "url": "sec-combinations.html#def-combination",
  "type": "Definition",
  "number": "3.54",
  "title": "Combination.",
  "body": " Combination   A combination of items occurs when:  The items are selected from the same group.  No item is used more than once.  The order of items makes no difference .     "
},
{
  "id": "ex-distinguish-perm-combo",
  "level": "2",
  "url": "sec-combinations.html#ex-distinguish-perm-combo",
  "type": "Checkpoint",
  "number": "3.55",
  "title": "Identifying Permutations and Combinations.",
  "body": " Identifying Permutations and Combinations   For each of the following, determine whether the problem involves permutations or combinations:   How many ways can you select 6 free videos from a list of 200 videos?  In a race with 50 runners and no ties, in how many ways can the first three finishers come in?  Baskin-Robbins offers 31 different flavors of ice cream. One item is a bowl consisting of three scoops, each a different flavor. How many such bowls are possible?  A three-person committee is needed to study the possibility of expanding the neighborhood park. How many different committees could be formed from six people?       Combination : the order of the selected videos does not matter; only which 6 are chosen matters.  Permutation : first, second, and third place are distinct positions, so order matters.  Combination : the bowl is defined by the set of three flavors, and swapping flavors produces the same bowl.  Combination : the committee members are chosen without ordered roles.     "
},
{
  "id": "def-combination-formula",
  "level": "2",
  "url": "sec-combinations.html#def-combination-formula",
  "type": "Definition",
  "number": "3.56",
  "title": "The Combination Formula.",
  "body": " The Combination Formula   The number of combinations of things taken at a time is denoted by :      "
},
{
  "id": "ex-committee-8",
  "level": "2",
  "url": "sec-combinations.html#ex-committee-8",
  "type": "Example",
  "number": "3.57",
  "title": "Public Transportation Committee.",
  "body": " Public Transportation Committee   A three-person committee is needed to study ways of improving public transportation. How many committees could be formed from the eight people on the board of supervisors?    This is a combination because the order of committee members does not matter.  Compute .  Simplify:   There are 56 possible committees.   TI-30XIIS Keystrokes: To calculate this on your TI-30XIIS: Type 8  Press PRB , use the arrow keys to underline nCr , press ENTER  Type 3  Press ENTER again to get the result of 56.   "
},
{
  "id": "ex-pet-sitting",
  "level": "2",
  "url": "sec-combinations.html#ex-pet-sitting",
  "type": "Example",
  "number": "3.58",
  "title": "Pet Combinations.",
  "body": " Pet Combinations   You are volunteering to pet-sit for a friend who has seven different animals. How many different pet combinations are possible if you take three of the seven pets?    Order does not matter when choosing pets for a group, so use combinations.      TI-30XIIS Keystrokes: To calculate this on your TI-30XIIS: Type 7  Press PRB , use the arrow keys to underline nCr , press ENTER  Type 3  Press ENTER again to get the result of 35.   "
},
{
  "id": "ex-4-card-hand",
  "level": "2",
  "url": "sec-combinations.html#ex-4-card-hand",
  "type": "Example",
  "number": "3.59",
  "title": "Four-Card Hand.",
  "body": " Four-Card Hand   How many different 4-card hands can be dealt from a deck that has 16 different cards?    A hand is a combination because the order of the cards does not matter.      "
},
{
  "id": "ex-poker-hand",
  "level": "2",
  "url": "sec-combinations.html#ex-poker-hand",
  "type": "Example",
  "number": "3.60",
  "title": "Poker Hands.",
  "body": " Poker Hands   In poker, a person is dealt 5 cards from a standard 52-card deck ( ). The order in which the cards are dealt does not matter. How many different 5-card poker hands are possible?    Use combinations because only the set of cards matters.      TI-30XIIS Keystrokes: To calculate this on your TI-30XIIS: Type 52  Press PRB , use the arrow keys to underline nCr , press ENTER  Type 5  Press ENTER again to get the result of 2,598,960.   "
},
{
  "id": "ex-107-congress",
  "level": "2",
  "url": "sec-combinations.html#ex-107-congress",
  "type": "Example",
  "number": "3.61",
  "title": "Senate Committee Selection.",
  "body": " Senate Committee Selection   The U.S. Senate of the 107th Congress consisted of 50 Democrats, 49 Republicans, and one independent. How many committees can be formed if each committee must have 3 Democrats and 2 Republicans?    Use combinations because the order of committee members does not matter.  Choose 3 Democrats from 50: .  Choose 2 Republicans from 49: .  Total committees:    TI-30XIIS Keystrokes: To calculate : Type 50  Press PRB , use the arrow keys to underline nCr , press ENTER  Type 3  Press ENTER . Repeat the process for and multiply the results.   "
},
{
  "id": "ex-practice-combination-counting",
  "level": "2",
  "url": "sec-combinations.html#ex-practice-combination-counting",
  "type": "Checkpoint",
  "number": "3.62",
  "title": "Practice Problems.",
  "body": " Practice Problems   Answer the following problems. Identify whether each situation uses combinations, permutations, or the product rule, and then compute the requested count.   A popular brand of pen is available in three colors and four writing tips. How many different choices of pens do you have with this brand?  How many four-digit odd numbers are there?  An election ballot asks voters to select three city commissioners from a group of eight candidates. In how many ways can this be done?  Six singers are to perform on a weekend evening at a nightclub. How many different ways are there to schedule their appearances?  In how many ways can you arrange six books along a shelf, assuming that the order of the books makes a difference?  An ice cream store sells two drinks in four sizes and five flavors. In how many ways can a customer order a drink?  An electronic gate can be opened by entering five digits on a keypad containing the digits 0–9. How many different keypad sequences are possible if the digit 0 cannot be used as the first digit?  A math exam consists of 10 multiple-choice questions and 5 open-ended problems in which all work must be shown. If a student must answer 8 of the multiple-choice questions and 3 of the open-ended problems, in how many ways can the questions and problems be chosen?  For a temporary job, you are painting parking spaces for a new shopping mall with a letter of the alphabet and a single digit from 1 to 9. The first parking space is A1 and the last parking space is Z9. How many parking spaces can you paint with distinct labels?  In a race with 100 runners and no ties, in how many ways can the first three finishers come in?  Six people are on the board of supervisors for your neighborhood park. A three-person committee is needed to study the possibility of expanding the park. How many different committees could be formed from the six people?  Nine comedy acts will perform over two evenings. Five of the acts will perform on the first evening. How many ways can the schedule for the first evening be made?  To win Mega Millions, you must pick 5 numbers from a collection of 56 and one Megaball number from a collection of 46. The order of the first 5 does not matter. How many different selections are possible?  An exam consists of 20 multiple-choice questions and 10 open-ended problems. If a student must answer 15 of the multiple-choice and 5 of the open-ended questions, in how many ways can the questions and problems be chosen?  In a lucky draw, 10 names are placed in a box and three are drawn. Find the number of ways those three names can be selected.        Since we are making two independent choices (brand and color), we use the Product Rule . Multiply the number of brand options by the number of color options:     We use the Fundamental Counting Principle for each of the four digits:  First digit (1-9): 9 choices  Middle digits (0-9): 10 choices each  Last digit (odd): 5 choices (1, 3, 5, 7, 9)       This is a combination because the order of committee members does not matter.     This is a permutation of all 6 distinct subjects.     Arranging all items in a row is a permutation .     By the Product Rule , multiply the choices for size, caffeine, and flavor:     The first digit cannot be zero (9 choices), and the remaining four digits can be any number 0-9 (10 choices each):     Select the items separately then multiply:      Multiply the number of letter options by the number of digit options:     Since the positions (President, VP, Secretary) are distinct, order matters; this is a permutation .     Choosing a subgroup where order is irrelevant is a combination .     Select 5 players from 9 without regard to order:     First, calculate the combinations for the 5 white balls, then multiply by the Megaball choice:      Calculate the ways to choose the two groups separately:      Selecting a group of 3 from 10 is a combination :       "
},
{
  "id": "sec-probability-fcp-npr-ncr",
  "level": "1",
  "url": "sec-probability-fcp-npr-ncr.html",
  "type": "Section",
  "number": "",
  "title": "3.7 Probability with the FCP, nPr and nCr",
  "body": " 3.7 Probability with the FCP, nPr and nCr   Probability with Fundamental Counting Principle and permutations, nPr   We return to our concert series with BTS, Blackstreet Boys, NSYNC and TLC. Now, New Kids on the Block (NKOTB) agrees to join the tour. The five groups determine the performance order by drawing names from a hat.  What is the probability of TLC performing fourth and BTS performing last?   Recall the probability formula ( ), the probability is the fraction of the number of event outcomes over the total number of possible outcomes.  To solve this problem, we will use the Fundamental Counting Principle (FCP) to find the total number of possible arrangements of the five groups, and then determine how many of those arrangements have TLC performing fourth and BTS performing last.   {}The probability is defined as:   First, we find the total number of ways to arrange the 5 groups using the Fundamental Counting Principle :   Next, we find the number of successful outcomes where TLC is 4th and BTS is last. By fixing these two positions, we only need to arrange the remaining 3 groups (Backstreet Boys, NSYNC, and NKOTB) in the first three slots:  1st spot: 3 choices  2nd spot: 2 choices  3rd spot: 1 choice  4th spot: Fixed (TLC)  5th spot: Fixed (BTS)     Therefore, calculate the probability:    TI-30XIIS Keystrokes: To find the total permutations (5!), type 5   PRB  arrow over to underline !   ENTER   ENTER . The result is 120.    Probability of Performers   Seven performers A, B, C, D, E, F, and G are to appear in a fundraiser. The order of performance is determined by random selection. Find the probability that:    D will perform first.  E will perform sixth and B will perform last.  They will perform in the following order: C, D, B, A, G, F, E.  F or G will perform first.      First, we find the total number of possible outcomes for the sample space. Since there are 7 positions to fill:    TI-30XIIS: Type 7  Press PRB  Arrow right to underline !  Press ENTER  Press ENTER .      To find the number of ways D can perform first , we fix D in the first spot:      To find the number of ways E performs 6th and B performs last , we fix those two positions:      There is only one specific sequence out of the 5,040 possibilities:      For F or G to perform first , we have 2 choices for the first spot:           Probability with Combinations, nCr   Probability of Winning LOTTO  Florida's lottery game LOTTO is set up so that each player chooses six different numbers from 1 to 53. If the six numbers chosen match the six numbers drawn randomly, the player wins the top cash prize. With one LOTTO ticket, what is the probability of winning this prize?   Because the order of the six numbers does not matter, this is a situation involving combinations. We begin with the formula for probability:   We are selecting numbers from a collection of numbers. Using the combination formula:    TI-30XIIS Keystrokes: To calculate : Type 53  Press PRB  Underline nCr and press ENTER  Type 6  Press ENTER .  There are nearly 23 million number combinations possible in LOTTO. If a person buys one LOTTO ticket, that person has selected only one combination of six numbers. With one LOTTO ticket, there is only one way of winning:   The probability of winning the top prize with one LOTTO ticket is or about 1 in 23 million.      A state lottery is designed so that a player chooses five numbers from 1 to 30 on one lottery ticket. What is the probability that a player with one lottery ticket will win? What is the probability of winning if 100 different lottery tickets are purchased?    The total number of possible outcomes is the number of ways to choose 5 numbers from 30:   The probability of winning with one ticket is:   The probability of winning with 100 tickets is:     To calculate on your TI-30XIIS :  Enter 30 .  Press the PRB key.  Use the Right Arrow to underline nCr .  Press ENTER .  Enter 5 and press ENTER (Result: 142,506).  To find the probability, press 1  ÷  2nd  ANS  ENTER .       Probability of Club Committee Selection   A club consists of five men and seven women. Three members are selected at random to attend a conference. Find the probability that the selected group consists of:  three men.  one man and two women.      First, we find the total number of ways to choose 3 members from the group of 12 (5 men + 7 women):      To find the probability of selecting three men, we first find the number of ways to choose 3 men from the 5 available:   The probability is:     To find the probability of selecting one man and two women, we calculate the ways to choose each and multiply them:  Ways to choose 1 man from 5:  Ways to choose 2 women from 7:         TI-30XIIS Tip: To calculate part (b) in one string: 5  PRB ( nCr ) 1  ×  7  PRB ( nCr ) 2  ÷  220  ENTER .     Probability of Defective Transistors   A box contains 25 transistors, 6 of which are defective. If 6 are selected at random, find the probability that:  all are defective.  none are defective.      First, we determine the total number of ways to select 6 transistors from 25:      To find the probability that all 6 are defective, we choose 6 from the 6 defective transistors:      To find the probability that none are defective, all 6 must be chosen from the 19 non-defective transistors (25 total - 6 defective):        TI-30XIIS Calculator Steps:   For the denominator: 25  PRB ( nCr ) 6  ENTER (Result: 177,100).  For part (b): 19  PRB ( nCr ) 6  ÷  177,100  ENTER .       Parent-Teacher Committee Selection   A parent-teacher committee consisting of four people is to be selected from fifteen parents and five teachers. Find the probability of selecting two parents and two teachers.    First, we find the total number of ways to choose 4 members from the group of 20 (15 parents + 5 teachers):   Next, we find the number of ways to select the specific group:  Ways to select 2 parents from 15:  Ways to select 2 teachers from 5:  Total successful outcomes: .  The probability is the number of successful outcomes divided by the total outcomes:   Simplifying the fraction and providing the decimal:    TI-30XIIS Calculator Steps:  15  PRB ( nCr ) 2  ×  5  PRB ( nCr ) 2  ÷  20  PRB ( nCr ) 4  ENTER .     Probability of Dealing Four Hearts   If you are dealt 4 cards from a shuffled deck of 52 cards ( ), find the probability that all 4 are hearts.    First, we determine the total number of ways to choose 4 cards from a deck of 52:   Next, we determine the number of ways to choose 4 hearts. Since there are 13 hearts in a deck:   The probability that all 4 cards are hearts is the number of ways to choose 4 hearts divided by the total number of ways to choose 4 cards:   Simplifying the fraction and providing the decimal:    TI-30XIIS Calculator Steps:  13  PRB ( nCr ) 4  ÷  52  PRB ( nCr ) 4  ENTER .     Probability of Full House: Kings and Aces   If you are dealt 5 cards from a shuffled deck of 52 cards ( ), find the probability that you get 3 kings and two aces.    First, we find the total number of ways to choose 5 cards from a deck of 52:   Next, we calculate the number of ways to select the specific cards:  Ways to select 3 kings from the 4 available:  Ways to select 2 aces from the 4 available:  Total successful outcomes: .  The probability is the ratio of successful outcomes to the total possible outcomes:   Simplifying the fraction and providing the decimal:    TI-30XIIS Calculator Steps:  4  PRB ( nCr ) 3  ×  4  PRB ( nCr ) 2  ÷  52  PRB ( nCr ) 5  ENTER .     "
},
{
  "id": "subsec-nPr-Probability-2-1",
  "level": "2",
  "url": "sec-probability-fcp-npr-ncr.html#subsec-nPr-Probability-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "New Kids on the Block (NKOTB) "
},
{
  "id": "subsec-nPr-Probability-2-2",
  "level": "2",
  "url": "sec-probability-fcp-npr-ncr.html#subsec-nPr-Probability-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "TLC BTS "
},
{
  "id": "subsec-nPr-Probability-4",
  "level": "2",
  "url": "sec-probability-fcp-npr-ncr.html#subsec-nPr-Probability-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fundamental Counting Principle (FCP) "
},
{
  "id": "subsec-nPr-Probability-5-2",
  "level": "2",
  "url": "sec-probability-fcp-npr-ncr.html#subsec-nPr-Probability-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fundamental Counting Principle "
},
{
  "id": "subsec-nPr-Probability-6",
  "level": "2",
  "url": "sec-probability-fcp-npr-ncr.html#subsec-nPr-Probability-6",
  "type": "Checkpoint",
  "number": "3.63",
  "title": "Probability of Performers.",
  "body": " Probability of Performers   Seven performers A, B, C, D, E, F, and G are to appear in a fundraiser. The order of performance is determined by random selection. Find the probability that:    D will perform first.  E will perform sixth and B will perform last.  They will perform in the following order: C, D, B, A, G, F, E.  F or G will perform first.      First, we find the total number of possible outcomes for the sample space. Since there are 7 positions to fill:    TI-30XIIS: Type 7  Press PRB  Arrow right to underline !  Press ENTER  Press ENTER .      To find the number of ways D can perform first , we fix D in the first spot:      To find the number of ways E performs 6th and B performs last , we fix those two positions:      There is only one specific sequence out of the 5,040 possibilities:      For F or G to perform first , we have 2 choices for the first spot:        "
},
{
  "id": "subsec-nCr-Probability-2",
  "level": "2",
  "url": "sec-probability-fcp-npr-ncr.html#subsec-nCr-Probability-2",
  "type": "Example",
  "number": "3.64",
  "title": "Probability of Winning LOTTO.",
  "body": " Probability of Winning LOTTO  Florida's lottery game LOTTO is set up so that each player chooses six different numbers from 1 to 53. If the six numbers chosen match the six numbers drawn randomly, the player wins the top cash prize. With one LOTTO ticket, what is the probability of winning this prize?   Because the order of the six numbers does not matter, this is a situation involving combinations. We begin with the formula for probability:   We are selecting numbers from a collection of numbers. Using the combination formula:    TI-30XIIS Keystrokes: To calculate : Type 53  Press PRB  Underline nCr and press ENTER  Type 6  Press ENTER .  There are nearly 23 million number combinations possible in LOTTO. If a person buys one LOTTO ticket, that person has selected only one combination of six numbers. With one LOTTO ticket, there is only one way of winning:   The probability of winning the top prize with one LOTTO ticket is or about 1 in 23 million.   "
},
{
  "id": "subsec-nCr-Probability-3",
  "level": "2",
  "url": "sec-probability-fcp-npr-ncr.html#subsec-nCr-Probability-3",
  "type": "Checkpoint",
  "number": "3.65",
  "title": "",
  "body": "  A state lottery is designed so that a player chooses five numbers from 1 to 30 on one lottery ticket. What is the probability that a player with one lottery ticket will win? What is the probability of winning if 100 different lottery tickets are purchased?    The total number of possible outcomes is the number of ways to choose 5 numbers from 30:   The probability of winning with one ticket is:   The probability of winning with 100 tickets is:     To calculate on your TI-30XIIS :  Enter 30 .  Press the PRB key.  Use the Right Arrow to underline nCr .  Press ENTER .  Enter 5 and press ENTER (Result: 142,506).  To find the probability, press 1  ÷  2nd  ANS  ENTER .     "
},
{
  "id": "subsec-nCr-Probability-4",
  "level": "2",
  "url": "sec-probability-fcp-npr-ncr.html#subsec-nCr-Probability-4",
  "type": "Example",
  "number": "3.66",
  "title": "Probability of Club Committee Selection.",
  "body": " Probability of Club Committee Selection   A club consists of five men and seven women. Three members are selected at random to attend a conference. Find the probability that the selected group consists of:  three men.  one man and two women.      First, we find the total number of ways to choose 3 members from the group of 12 (5 men + 7 women):      To find the probability of selecting three men, we first find the number of ways to choose 3 men from the 5 available:   The probability is:     To find the probability of selecting one man and two women, we calculate the ways to choose each and multiply them:  Ways to choose 1 man from 5:  Ways to choose 2 women from 7:         TI-30XIIS Tip: To calculate part (b) in one string: 5  PRB ( nCr ) 1  ×  7  PRB ( nCr ) 2  ÷  220  ENTER .   "
},
{
  "id": "subsec-nCr-Probability-5",
  "level": "2",
  "url": "sec-probability-fcp-npr-ncr.html#subsec-nCr-Probability-5",
  "type": "Checkpoint",
  "number": "3.67",
  "title": "Probability of Defective Transistors.",
  "body": " Probability of Defective Transistors   A box contains 25 transistors, 6 of which are defective. If 6 are selected at random, find the probability that:  all are defective.  none are defective.      First, we determine the total number of ways to select 6 transistors from 25:      To find the probability that all 6 are defective, we choose 6 from the 6 defective transistors:      To find the probability that none are defective, all 6 must be chosen from the 19 non-defective transistors (25 total - 6 defective):        TI-30XIIS Calculator Steps:   For the denominator: 25  PRB ( nCr ) 6  ENTER (Result: 177,100).  For part (b): 19  PRB ( nCr ) 6  ÷  177,100  ENTER .     "
},
{
  "id": "subsec-nCr-Probability-6",
  "level": "2",
  "url": "sec-probability-fcp-npr-ncr.html#subsec-nCr-Probability-6",
  "type": "Checkpoint",
  "number": "3.68",
  "title": "Parent-Teacher Committee Selection.",
  "body": " Parent-Teacher Committee Selection   A parent-teacher committee consisting of four people is to be selected from fifteen parents and five teachers. Find the probability of selecting two parents and two teachers.    First, we find the total number of ways to choose 4 members from the group of 20 (15 parents + 5 teachers):   Next, we find the number of ways to select the specific group:  Ways to select 2 parents from 15:  Ways to select 2 teachers from 5:  Total successful outcomes: .  The probability is the number of successful outcomes divided by the total outcomes:   Simplifying the fraction and providing the decimal:    TI-30XIIS Calculator Steps:  15  PRB ( nCr ) 2  ×  5  PRB ( nCr ) 2  ÷  20  PRB ( nCr ) 4  ENTER .   "
},
{
  "id": "subsec-nCr-Probability-7",
  "level": "2",
  "url": "sec-probability-fcp-npr-ncr.html#subsec-nCr-Probability-7",
  "type": "Checkpoint",
  "number": "3.69",
  "title": "Probability of Dealing Four Hearts.",
  "body": " Probability of Dealing Four Hearts   If you are dealt 4 cards from a shuffled deck of 52 cards ( ), find the probability that all 4 are hearts.    First, we determine the total number of ways to choose 4 cards from a deck of 52:   Next, we determine the number of ways to choose 4 hearts. Since there are 13 hearts in a deck:   The probability that all 4 cards are hearts is the number of ways to choose 4 hearts divided by the total number of ways to choose 4 cards:   Simplifying the fraction and providing the decimal:    TI-30XIIS Calculator Steps:  13  PRB ( nCr ) 4  ÷  52  PRB ( nCr ) 4  ENTER .   "
},
{
  "id": "subsec-nCr-Probability-8",
  "level": "2",
  "url": "sec-probability-fcp-npr-ncr.html#subsec-nCr-Probability-8",
  "type": "Checkpoint",
  "number": "3.70",
  "title": "Probability of Full House: Kings and Aces.",
  "body": " Probability of Full House: Kings and Aces   If you are dealt 5 cards from a shuffled deck of 52 cards ( ), find the probability that you get 3 kings and two aces.    First, we find the total number of ways to choose 5 cards from a deck of 52:   Next, we calculate the number of ways to select the specific cards:  Ways to select 3 kings from the 4 available:  Ways to select 2 aces from the 4 available:  Total successful outcomes: .  The probability is the ratio of successful outcomes to the total possible outcomes:   Simplifying the fraction and providing the decimal:    TI-30XIIS Calculator Steps:  4  PRB ( nCr ) 3  ×  4  PRB ( nCr ) 2  ÷  52  PRB ( nCr ) 5  ENTER .   "
},
{
  "id": "sec-prob-ch-ex",
  "level": "1",
  "url": "sec-prob-ch-ex.html",
  "type": "Section",
  "number": "",
  "title": "3.8 Chapter Exercises",
  "body": " 3.8 Chapter Exercises   Probability Practice Problem   Probability of Disjoint or Overlapping Events   A fair die is rolled. What is the probability of rolling an odd number or a number less than 3?    The sample space for a fair die is , so .  Odd numbers:  Numbers less than 3:  Overlap (Odd AND less than 3):  Using the Addition Rule:       Committee Selection   How many ways can a committee of 5 be selected from a club with 10 members?    Since the order of selection does not matter for a committee, we use combinations:    TI-30XIIS:  10  PRB ( nCr ) 5  ENTER .     Probability with Cards (Face or 3)   A card is drawn at random from a shuffled deck of 52 cards ( ). What is the probability of drawing a face card or a 3?    These are mutually exclusive events (a card cannot be both a face card and a 3).  Face cards (J, Q, K):  3s:        Probability of a Card Range   One card is selected from a deck of cards. Find the probability that the card selected is greater than 3 and less than 8.    First, we identify the values in a single suit that are greater than 3 and less than 8:  The numbers are: 4, 5, 6, and 7.  There are 4 such values per suit.    Since there are 4 suits in a deck (hearts, diamonds, clubs, and spades), we multiply:   The probability is the number of successful cards divided by the total number of cards (52):    TI-30XIIS Calculator Steps:  16  ÷  52  ENTER (Then press 2nd  PRB if you need to convert back to a simplified fraction).     Probability of Marbles (Not Blue)   A bag contains 8 red, 2 blue, and 1 green marble. What is the probability of choosing a marble that is not blue?    Total marbles: . Marbles that are \"not blue\" are red or green: .       Probability of Even or Five   A lottery game has balls numbered 0 through 9. What is the probability of selecting an even numbered ball or a 5?    First, we identify the sample space . The total number of outcomes is .  Next, we identify the successful outcomes:  Even numbered balls: (Note: 0 is an even number). There are 5 even balls.  The number 5: . There is 1 such ball.    Since these events are mutually exclusive (a ball cannot be both even and 5), we add the probabilities:   Simplifying the fraction and providing the decimal:    TI-30XIIS Calculator Steps:  6  ÷  10  ENTER . To see the simplified fraction, press 2nd  PRB (F<->D).     Health Survey (Inclusion-Exclusion)   A survey shows 40% take BP meds, 47% take cholesterol meds, and 13% take both. What is the probability a senior takes either?    Using the Addition Rule:  There is a 74% probability that a senior takes either BP meds or cholesterol meds.     Probability of a Specific Birth Sequence   A family has five children. The probability of having a girl is 1\/2. What is the probability of having 2 girls followed by 3 boys?     Probability Tree Diagram (First 3 Children)      This problem asks for the probability of one specific sequence: . Because the gender of each child is an independent event, we multiply the individual probabilities.  Given and :   Calculating the product:   In decimal form:      Probability of Marbles Without Replacement   Two marbles are drawn without replacement from a box with 3 white, 2 green, 2 red, and 1 blue marble.  Find a total possible ways to choose two marbles without replacement.  How many ways to choose two white marbles?  Find the probability that both marbles are white.       First, we find the total number of marbles: .     The total number of ways to choose 2 marbles from 8 without regard to order:     The number of ways to choose 2 white marbles from the 3 available:     The probability that both marbles are white is the ratio of successful ways to total ways:          Counting Three-Digit Numbers   How many different three-digit numbers can be written using digits from the set without any repeating digits?    Since the order of the digits matters in a number (e.g., 345 is different from 543) and repetitions are not allowed, we use the permutation formula .  There are digits available, and we are choosing of them:   There are 60 different three-digit numbers that can be formed.   TI-30XIIS Calculator Steps:   Enter 5 .  Press the PRB button.  Underline nPr and press ENTER .  Enter 3 and press ENTER .       Distinct Arrangements (IMMUNOLOGY)   In how many distinct ways can the letters in IMMUNOLOGY be arranged?    There are 10 letters total. We identify the repeats: M (2), O (2). The formula for distinguishable permutations is:    TI-30XIIS:  10  PRB ( ! ) ÷  (  2  PRB  !  ×  2  PRB  !  )  ENTER .     "
},
{
  "id": "sec-prob-ch-ex-2-2",
  "level": "2",
  "url": "sec-prob-ch-ex.html#sec-prob-ch-ex-2-2",
  "type": "Exercise",
  "number": "1",
  "title": "Probability of Disjoint or Overlapping Events.",
  "body": " Probability of Disjoint or Overlapping Events   A fair die is rolled. What is the probability of rolling an odd number or a number less than 3?    The sample space for a fair die is , so .  Odd numbers:  Numbers less than 3:  Overlap (Odd AND less than 3):  Using the Addition Rule:     "
},
{
  "id": "sec-prob-ch-ex-2-3",
  "level": "2",
  "url": "sec-prob-ch-ex.html#sec-prob-ch-ex-2-3",
  "type": "Exercise",
  "number": "2",
  "title": "Committee Selection.",
  "body": " Committee Selection   How many ways can a committee of 5 be selected from a club with 10 members?    Since the order of selection does not matter for a committee, we use combinations:    TI-30XIIS:  10  PRB ( nCr ) 5  ENTER .   "
},
{
  "id": "sec-prob-ch-ex-2-4",
  "level": "2",
  "url": "sec-prob-ch-ex.html#sec-prob-ch-ex-2-4",
  "type": "Exercise",
  "number": "3",
  "title": "Probability with Cards (Face or 3).",
  "body": " Probability with Cards (Face or 3)   A card is drawn at random from a shuffled deck of 52 cards ( ). What is the probability of drawing a face card or a 3?    These are mutually exclusive events (a card cannot be both a face card and a 3).  Face cards (J, Q, K):  3s:      "
},
{
  "id": "sec-prob-ch-ex-2-5",
  "level": "2",
  "url": "sec-prob-ch-ex.html#sec-prob-ch-ex-2-5",
  "type": "Exercise",
  "number": "4",
  "title": "Probability of a Card Range.",
  "body": " Probability of a Card Range   One card is selected from a deck of cards. Find the probability that the card selected is greater than 3 and less than 8.    First, we identify the values in a single suit that are greater than 3 and less than 8:  The numbers are: 4, 5, 6, and 7.  There are 4 such values per suit.    Since there are 4 suits in a deck (hearts, diamonds, clubs, and spades), we multiply:   The probability is the number of successful cards divided by the total number of cards (52):    TI-30XIIS Calculator Steps:  16  ÷  52  ENTER (Then press 2nd  PRB if you need to convert back to a simplified fraction).   "
},
{
  "id": "sec-prob-ch-ex-2-6",
  "level": "2",
  "url": "sec-prob-ch-ex.html#sec-prob-ch-ex-2-6",
  "type": "Exercise",
  "number": "5",
  "title": "Probability of Marbles (Not Blue).",
  "body": " Probability of Marbles (Not Blue)   A bag contains 8 red, 2 blue, and 1 green marble. What is the probability of choosing a marble that is not blue?    Total marbles: . Marbles that are \"not blue\" are red or green: .    "
},
{
  "id": "sec-prob-ch-ex-2-7",
  "level": "2",
  "url": "sec-prob-ch-ex.html#sec-prob-ch-ex-2-7",
  "type": "Exercise",
  "number": "6",
  "title": "Probability of Even or Five.",
  "body": " Probability of Even or Five   A lottery game has balls numbered 0 through 9. What is the probability of selecting an even numbered ball or a 5?    First, we identify the sample space . The total number of outcomes is .  Next, we identify the successful outcomes:  Even numbered balls: (Note: 0 is an even number). There are 5 even balls.  The number 5: . There is 1 such ball.    Since these events are mutually exclusive (a ball cannot be both even and 5), we add the probabilities:   Simplifying the fraction and providing the decimal:    TI-30XIIS Calculator Steps:  6  ÷  10  ENTER . To see the simplified fraction, press 2nd  PRB (F<->D).   "
},
{
  "id": "sec-prob-ch-ex-2-8",
  "level": "2",
  "url": "sec-prob-ch-ex.html#sec-prob-ch-ex-2-8",
  "type": "Exercise",
  "number": "7",
  "title": "Health Survey (Inclusion-Exclusion).",
  "body": " Health Survey (Inclusion-Exclusion)   A survey shows 40% take BP meds, 47% take cholesterol meds, and 13% take both. What is the probability a senior takes either?    Using the Addition Rule:  There is a 74% probability that a senior takes either BP meds or cholesterol meds.   "
},
{
  "id": "sec-prob-ch-ex-2-9",
  "level": "2",
  "url": "sec-prob-ch-ex.html#sec-prob-ch-ex-2-9",
  "type": "Exercise",
  "number": "8",
  "title": "Probability of a Specific Birth Sequence.",
  "body": " Probability of a Specific Birth Sequence   A family has five children. The probability of having a girl is 1\/2. What is the probability of having 2 girls followed by 3 boys?     Probability Tree Diagram (First 3 Children)      This problem asks for the probability of one specific sequence: . Because the gender of each child is an independent event, we multiply the individual probabilities.  Given and :   Calculating the product:   In decimal form:    "
},
{
  "id": "sec-prob-ch-ex-2-10",
  "level": "2",
  "url": "sec-prob-ch-ex.html#sec-prob-ch-ex-2-10",
  "type": "Exercise",
  "number": "9",
  "title": "Probability of Marbles Without Replacement.",
  "body": " Probability of Marbles Without Replacement   Two marbles are drawn without replacement from a box with 3 white, 2 green, 2 red, and 1 blue marble.  Find a total possible ways to choose two marbles without replacement.  How many ways to choose two white marbles?  Find the probability that both marbles are white.       First, we find the total number of marbles: .     The total number of ways to choose 2 marbles from 8 without regard to order:     The number of ways to choose 2 white marbles from the 3 available:     The probability that both marbles are white is the ratio of successful ways to total ways:        "
},
{
  "id": "sec-prob-ch-ex-2-11",
  "level": "2",
  "url": "sec-prob-ch-ex.html#sec-prob-ch-ex-2-11",
  "type": "Exercise",
  "number": "10",
  "title": "Counting Three-Digit Numbers.",
  "body": " Counting Three-Digit Numbers   How many different three-digit numbers can be written using digits from the set without any repeating digits?    Since the order of the digits matters in a number (e.g., 345 is different from 543) and repetitions are not allowed, we use the permutation formula .  There are digits available, and we are choosing of them:   There are 60 different three-digit numbers that can be formed.   TI-30XIIS Calculator Steps:   Enter 5 .  Press the PRB button.  Underline nPr and press ENTER .  Enter 3 and press ENTER .     "
},
{
  "id": "sec-prob-ch-ex-2-12",
  "level": "2",
  "url": "sec-prob-ch-ex.html#sec-prob-ch-ex-2-12",
  "type": "Exercise",
  "number": "11",
  "title": "Distinct Arrangements (IMMUNOLOGY).",
  "body": " Distinct Arrangements (IMMUNOLOGY)   In how many distinct ways can the letters in IMMUNOLOGY be arranged?    There are 10 letters total. We identify the repeats: M (2), O (2). The formula for distinguishable permutations is:    TI-30XIIS:  10  PRB ( ! ) ÷  (  2  PRB  !  ×  2  PRB  !  )  ENTER .   "
},
{
  "id": "notes-Visualizing-Data-Through-Graphs",
  "level": "1",
  "url": "notes-Visualizing-Data-Through-Graphs.html",
  "type": "Section",
  "number": "",
  "title": "4.1 Visualizing Data Through Graphs",
  "body": " 4.1 Visualizing Data Through Graphs   After collecting survey or experimental data, we must summarize and present it meaningfully for our audience. We will start with graphical data presentations before moving on to numerical summaries.  Raw information can often feel overwhelming and difficult to interpret. To reveal clear insights, researchers and data analysts rely heavily on visual graphics. The four primary tools used to display quantitative variables are bar graphs, line graphs, pie charts and histogram. The specific choice among them depends entirely on the characteristics of the data being evaluated.  Categorical (or qualitative) data helps us sort individual subjects into distinct groups. To make sense of this information, we usually begin by constructing a two-column frequency table . The first column lists out the available categories, while the parallel column captures the corresponding frequency—meaning the absolute count of observations belonging to each classification.       Frequency Table  A frequency table consists of two columns. The first column lists the data values and if the values are numeric, then they are listed from smallest to largest. The second column is the frequency, which indicates the number of times each value occurs.     A questionnaire was given to students in an introductory statistics class during the first week of the course. One question asked, ``How stressed have you been in the last 2 1\/2 weeks, on a scale of 0 to 10, with 0 being not at all stressed and 10 being as stressed as possible?” The students' responses are shown in the frequency table. Use this frequency table to answer the following questions.   Stress Levels of Students    Stress Level  Frequency    0  2    1  3    2  5    3  8    4  12    5  10    6  13    7  31    8  26    9  11    10  9       Which stress rating describes the greatest number of students? How many students responded with this rating?  Which stress rating describes the least number of students? How many students responded with this rating?  How many students were involved in this study?  How many students had a stress rating of 8 or more?       The most common stress level is 7, with 31 students responding with this rating.  The least common stress level is 0, with 2 students responding with this rating.  A total of 140 students were involved in this study.   The number of students who had a stress rating of 8 or more is:        The number of touchdown (TD) passes thrown by each of the 31 teams in the National Football League in the 2000 season are shown below:   NFL Touchdown Passes (2000 Season)    37  33  33  32  29  28  28  23  22  22  22    21  21  21  20  20  19  19  18  18  18  18    16  15  14  14  14  12  12  9  6       Construct a frequency table for the data of the number of touchdown passes thrown by each NFL team in the 2000 season.    To construct a frequency table, we first identify the unique values in the dataset and count how many times each value occurs. The frequency table for the NFL touchdown passes is as follows:   Frequency Table for NFL Touchdown Passes (2000 Season)    Value  Frequency    6  1    9  1    12  2    14  3    15  1    16  1    18  4    19  2    20  2           Bar graph    Bar graphs are best suited for comparing quantities or counts across distinct, independent categories. They utilize horizontal or vertical rectangular bars where the length or height of each bar directly corresponds to the numerical value it represents.    For example, a political analyst would use a bar graph to compare the total number of votes received by different candidates in an election, allowing the reader to instantly identify the frontrunner.    We return to the example of the NFL touchdown passes data to demonstrate how a bar graph can be constructed.    Using the frequency table , we constructed earlier, we can create a bar graph where the x-axis represents the number of touchdown passes and the y-axis represents the frequency of each value. This will visually display how often each number of touchdown passes occurred across the 31 teams. Each bar's height will correspond to the frequency of that particular number of touchdown passes, allowing us to quickly see which values were most common and which were rare.   Touchdown Passes Frequency Bar Graph   A vertical bar graph displaying the frequency of touchdown passes thrown by NFL teams in the 2000 season. The horizontal axis represents the number of touchdown passes, and the vertical axis represents the frequency of teams. Bars of varying heights correspond to each touchdown pass value, with the tallest bar at 18 touchdown passes representing a frequency of 4 teams.         A small business tracks the number of laptops sold over three months: January (15 units), February (22 units), and March (18 units). Determine which category goes on each axis to construct a vertical bar graph.    To construct a standard vertical bar graph, the independent nominal categories must be placed along the baseline axis, while the numerical quantitative metrics track along the vertical boundary:    Horizontal Axis (x-axis): Contains the Months (January, February, and March).     Vertical Axis (y-axis): Tracks the quantitative scale for Units Sold (ranging from 0 up to at least 22).     Each bar's height will correspond to the number of laptops sold in that month, allowing for an immediate visual comparison across the three categories.   Sample structure for a vertical bar graph.   A vertical bar chart displaying laptop units sold over three months. The horizontal axis represents the months, and the vertical axis scales from 0 to 25 to track units sold. January displays a bar reaching 15 units, February shows a bar reaching 22 units, and March shows a bar reaching 18 units.       An insurance provider calculates policy premiums by analyzing established risk variables. Drivers classified under higher-risk brackets are subject to increased premium rates. One variable often evaluated is vehicle color, under the assumption that certain car colors are linked to a higher probability of accidents.  To investigate this theory, the company reviewed local law enforcement records detailing recent total-loss traffic collisions. The gathered information is organized into the frequency distribution table below.   Frequency of Total-Loss Collisions by Vehicle Color    Vehicle Color  Frequency (Accidents)    Blue  25    Green  52    Red  41    White  36    Black  39    Grey  23     To draw meaningful conclusions from this categorical data, we must first find the total sample size ( ) by summing all frequencies:     Next, we calculate the relative frequency (percentage) for each color category using the formula . Rounding to two decimal places, we find:    Blue:   Green:   Red:   White:   Black:   Grey:     The data suggests that Green vehicles accounted for the largest share of total-loss collisions ( ), while Grey vehicles accounted for the lowest share ( ).    Using the total-loss collision dataset compiled by the insurance provider in , construct a bar graph to visually model the distribution of vehicle colors.    To construct the bar graph, we map each vehicle color category along the horizontal axis (x-axis) and place the frequency counts along the vertical axis (y-axis). The height of each rectangular column corresponds exactly to its recorded category frequency:    Blue: 25 units high  Green: 52 units high  Red: 41 units high  White: 36 units high  Black: 39 units high  Grey: 23 units high    This layout provides an immediate visual hierarchy, showing that green cars are involved in more total-loss accidents than any other color in this sample group.   Bar Graph of Total-Loss Collisions by Vehicle Color   A vertical bar chart plotting car colors on the horizontal axis against collision frequencies on the vertical axis. The vertical axis scales from 0 to 60. Blue shows a bar reaching 25, Green reaches 52, Red reaches 41, White reaches 36, Black reaches 39, and Grey reaches 23.         A school cafeteria counts the number of fruit items sold in a day: 40 apples, 55 bananas, and 25 oranges. If you create a vertical bar graph, which item will have the tallest bar, and what value will it represent?    The category with the highest count is bananas. Therefore, bananas will have the tallest bar, representing a value of 55.   Vertical bar graph tracking daily cafeteria fruit sales.   A vertical bar graph tracking cafeteria sales. The horizontal axis represents the fruit types, and the vertical axis scales from 0 to 60. Apples show a bar at 40, bananas show the tallest bar at 55, and oranges show a bar at 25.       After establishing class intervals and a corresponding frequency table for a quantitative dataset, we can construct a visual graph similar to a standard bar chart. However, because quantitative data is numerical and continuous, the horizontal axis must be treated as an unbroken number line with no spacing between adjacent bars. This specialized graphical representation is known as a histogram .      Histogram   A histogram is a graphical tool used to display the frequency distribution of a single continuous numerical variable. Similar to a bar graph, it represents frequencies using the height of rectangular bars; however, its horizontal axis functions as a continuous number line. The data values are grouped into specific intervals, known as classes or bins. Unlike categorical bar charts, the vertical bars in a histogram must touch directly to accurately reflect the unbroken, sequential nature of the underlying scale.     Gym Workout Durations   A gym records the workout durations of its members in minutes. The data is grouped into three continuous intervals: 0–20 minutes (5 people), 20–40 minutes (15 people), and 40–60 minutes (10 people). Determine the total sample size tracked across this histogram layout.    To find the total sample size, sum the frequencies represented by the height of each adjacent bar:   The histogram tracks a total sample size of 30 gym members.   Frequency distribution across adjacent numerical bins.   A frequency histogram tracking gym workout durations. The horizontal axis represents workout duration in minutes, with markers at 0, 20, 40, and 60. The vertical axis represents the number of members from 0 to 20. Three adjacent purple bars touch each other: the first bin from 0 to 20 minutes has a height of 5, the middle bin from 20 to 40 minutes has a height of 15, and the third bin from 40 to 60 minutes has a height of 10.         Using the total-loss collision dataset compiled by the insurance provider in , construct a histogram-style bar chart to visually model the distribution of vehicle colors.    To present this categorical data in a touching-bar format, we plot the vehicle color categories along the horizontal axis and the collision frequencies on the vertical axis. By adjusting our bar spacing properties, we can configure the rectangles to touch side-by-side:    Blue: Bar height is 25  Green: Bar height is 52  Red: Bar height is 41  White: Bar height is 36  Black: Bar height is 39  Grey: Bar height is 23     Histogram-Style Visual Distribution of Vehicle Colors   A vertical bar chart plotting car colors on the horizontal axis against frequencies on the vertical axis. The bars touch each other directly using a histogram style layout. Blue reaches 25, Green reaches 52, Red reaches 41, White reaches 36, Black reaches 39, and Grey reaches 23.        Nutrition Study Weight Distribution   Suppose that we have collected weights from 100 male subjects as part of a nutrition study. For our weight data, we have values ranging from a low of 121 pounds to a high of 263 pounds, giving a total span of: We can experiment with different bin allocations to summarize the data. Let us organize the dataset using a uniform interval width of 15, starting at a baseline value of 120.   Interval Frequency Distribution Table     Weight Interval (Pounds)  Frequency (Count)    120-134  4    135-149  14    150-164  16    165-179  28    180-194  12    195-209  8    210-224  7    225-239  6    240-254  2    255-269  3      Using the frequency chart, we construct a continuous frequency histogram. Each vertical bar spans an interval of 15 pounds on the horizontal axis, and the height matches the respective category count.   Frequency histogram of male subject weights with an interval width of 15.   A continuous frequency histogram tracking the weights of 100 male subjects. The horizontal axis charts weights from 120 to 270 pounds with main tick labels every 15 units. The vertical axis monitors frequencies from 0 to 30. Ten continuous, touching blue bars represent the frequencies: the first bar at 120 has a height of 4; followed by 14, 16; peaking at a height of 28 for the 165-180 pound bin; then stepping down to 12, 8, 7, 6, 2; and ending with a final bar height of 3 at the 255-270 pound boundary.           Line graph    Line graphs are ideal for illustrating trends and demonstrating how numbers fluctuate over a continuous period. This format displays a sequential series of specific data points—frequently referred to as markers—that are connected by straight lines to show a clear trajectory.    A common application includes tracking macroeconomic variables, such as a city's average monthly temperature or a company's fluctuating stock prices throughout a fiscal year.    An analyst records the stock price of a company over four days: Day 1 ( ), Day 2 ( ), Day 3 ( ), and Day 4 ( ). Describe the overall trend shown by connecting these data points on a line graph.    The line segments will move upward from Day 1 to Day 2, slope downward from Day 2 to Day 3, and then rise sharply from Day 3 to Day 4. Despite the mid-period dip on Day 3, the overall trend over the four-day period is upward.   Sample trajectory for a continuous trend line.   A continuous line graph tracking stock prices over 4 days. The horizontal axis tracks days 1 through 4, and the vertical axis spans from \\$5 to \\$25. A solid blue line connects the markers: rising from \\$10 on Day 1 to \\$15 on Day 2, dipping down to \\$12 on Day 3, and peaking sharply at \\$20 on Day 4.         Using the total-loss collision dataset compiled by the insurance provider in , construct a line graph to visually model the distribution of vehicle colors.    To construct a line graph for this dataset, we plot the vehicle color categories along the horizontal axis and the collision frequencies on the vertical axis. Instead of drawing columns, we plot a single coordinate point for each category and connect them sequentially with straight line segments:    Blue: Point at 25  Green: Point at 52  Red: Point at 41  White: Point at 36  Black: Point at 39  Grey: Point at 23    This visualization allows us to trace the ups and downs across categories, showing a sharp peak at Green and a drop at Grey.   Line Graph of Total-Loss Collisions by Vehicle Color   A line graph plotting car colors on the horizontal axis against collision frequencies on the vertical axis. The vertical axis scales from 0 to 60. A line connects data markers starting at Blue (25), rising sharply to Green (52), dropping to Red (41) and White (36), rising slightly to Black (39), and falling to its lowest point at Grey (23).         A patient's body temperature is recorded every hour: Hour 1 ( ), Hour 2 ( ), Hour 3 ( ), and Hour 4 ( ). Between which two hours does the line graph show the sharpest increase?    To find the sharpest increase, we calculate the differences between consecutive hourly measurements:  The increase from Hour 1 to Hour 2 is: The increase from Hour 2 to Hour 3 is:   Comparing these calculations, the graph shows the sharpest increase between Hour 1 and Hour 2 .   Hourly tracking of patient body temperature.   A continuous line graph tracking a patient's temperature over 4 hours. The horizontal axis maps hours 1 to 4, and the vertical axis scales from 97 to 103 degrees Fahrenheit. A solid blue line rises from 98.6 degrees at Hour 1 to 100.2 degrees at Hour 2, climbs further to 101.5 degrees at Hour 3, and then falls down to 99.1 degrees at Hour 4.           Pie Chart    Pie charts are designed for visualizing proportions and showing how a single, cohesive entity is divided into individual parts. The chart consists of a circle divided into sectors, or slices, where the arc length and central angle of each slice are strictly proportional to the percentage of the total dataset it represents.    This format is particularly effective for illustrating the relative sizes of categories within a whole, such as market share distribution among companies or the breakdown of a budget into different expense categories.    A budget consists of for Rent, for Food, and for Utilities. Calculate the percentage of the pie chart slice that represents Rent.    First, find the total budget by summing the individual expenses:   Next, divide the Rent cost by the total budget to find its proportion:   Multiply by 100 to convert the decimal into a percentage:   The Rent slice will take up exactly half ( 50% ) of the pie chart.   Proportional slice distribution in a circular layout.   A circular pie chart divided into three colored budget sections. The bottom half of the circle is blue and represents Rent at 50 percent. The top right quadrant is green and represents Food at 25 percent. The top left quadrant is orange and represents Utilities at 25 percent.         Using the total-loss collision dataset compiled by the insurance provider in , construct a pie chart to visually model the distribution of vehicle colors.    To construct a pie chart, we convert each category's frequency into a proportional central angle of a circle ( ). Using the total sample size ( ), the angle for each slice is calculated using the formula :    Blue:  ( )  Green:  ( )  Red:  ( )  White:  ( )  Black:  ( )  Grey:  ( )    Each sector is drawn sequentially around the center of the circle to construct the final visual proportion.   Pie Chart of Total-Loss Collisions by Vehicle Color   A circular pie chart divided into six colored sectors representing the proportion of vehicle collisions. Green is the largest slice at 24.1 percent, followed by Red at 19 percent, Black at 18.1 percent, White at 16.7 percent, Blue at 11.6 percent, and Grey as the smallest slice at 10.6 percent.         A survey of 200 people shows that 100 prefer vanilla ice cream, 60 prefer chocolate, and 40 prefer strawberry. What central angle degree should be used to draw the slice for chocolate?    The proportion for chocolate is: Since a full circle has , multiply the proportion by 360 to find the central angle: The chocolate slice requires a central angle of .   Pie chart representing ice cream flavor preferences.   A circular pie chart divided into three distinct sections. The right half of the circle is yellow and represents Vanilla at 50 percent. The bottom-left sector is brown and represents Chocolate with a 108-degree angle at 30 percent. The top-left sector is pink and represents Strawberry at 20 percent.         The following dataset represents the scores of students on a recent history test:  80, 50, 50, 90, 70, 70, 100, 60, 70, 80, 70, 50, 90, 100, 80, 70, 30, 80, 80, 70, 100, 60, 60, 50    Complete a frequency table for the test scores.  Construct a bar graph of the data.  Construct a line graph of the data.  Construct a pie chart of the data.  Construct a histogram of the data.        (a) Frequency Table: Sorting and counting each distinct score yields the following frequency distribution:   Frequency Distribution of History Test Scores    Test Score  Frequency (Students)   30 1  50 4  60 3  70 6  80 5  90 2  100 3      (b) Bar Graph: We represent each distinct score on the horizontal axis and its frequency count on the vertical axis using separated vertical columns:   Bar Graph of Test Scores   A vertical bar chart showing test scores on the horizontal axis and student frequency on the vertical axis. Bars are at 30 with height 1, 50 with height 4, 60 with height 3, 70 with height 6, 80 with height 5, 90 with height 2, and 100 with height 3.       (c) Line Graph: Using the same axes as the bar chart, coordinate markers are plotted at each data junction and linked sequentially using line tracks:   Line Graph of Test Scores   A line graph mapping test scores to the number of students. Circles show points at score 30 with frequency 1, 50 with 4, 60 with 3, 70 with 6, 80 with 5, 90 with 2, and 100 with 3, connected by a trendline.       (d) Pie Chart: To map out global proportions, we compute percentage shares based on the total sample of students ( ):    Score 30:  ( )  Score 50:  ( )  Score 60:  ( )  Score 70:  ( )  Score 80:  ( )  Score 90:  ( )  Score 100:  ( )     Pie Chart of Test Score Distributions   A pie chart dividing the student distribution among scores. Slices represent Score 30 at 4.2 percent, Score 50 at 16.7 percent, Score 60 at 12.5 percent, Score 70 at 25 percent, Score 80 at 20.8 percent, Score 90 at 8.3 percent, and Score 100 at 12.5 percent.       (e) Histogram: We group the scores into 10-point bins along a continuous horizontal axis causing the bars to lock tightly side-by-side:    [25, 35): 1 student (score 30)  [35, 45): 0 students  [45, 55): 4 students (scores of 50)  [55, 65): 3 students (scores of 60)  [65, 75): 6 students (scores of 70)  [75, 85): 5 students (scores of 80)  [85, 95): 2 students (scores of 90)  [95, 105]: 3 students (scores of 100)     Histogram of Test Score Distributions   A histogram displaying the continuous interval distribution of test scores. The bars touch each other directly: the bin from 25 to 35 has a height of 1, 45 to 55 has a height of 4, 55 to 65 has a height of 3, 65 to 75 reaches the peak at 6, 75 to 85 has a height of 5, 85 to 95 has a height of 2, and 95 to 105 has a height of 3.       (e) Histogram: Unlike the categorical charts above, a true histogram tracks quantitative continuous intervals. We group the scores into 20-point bins along a continuous horizontal axis causing the bars to lock tightly side-by-side:    [20, 40): 1 student (score 30)  [40, 60): 4 students (scores of 50)  [60, 80): 9 students (scores of 60 and 70)  [80, 100): 7 students (scores of 80 and 90)  [100, 120): 3 students (scores of 100)     Histogram of Test Score Distributions   A histogram displaying the continuous 20-point interval distribution of test scores. The bars touch each other directly: the bin from 20 to 40 has a height of 1, 40 to 60 has a height of 4, 60 to 80 reaches the peak at 9, 80 to 100 has a height of 7, and 100 to 120 has a height of 3.       "
},
{
  "id": "example-stress-levels",
  "level": "2",
  "url": "notes-Visualizing-Data-Through-Graphs.html#example-stress-levels",
  "type": "Example",
  "number": "4.1",
  "title": "",
  "body": "  A questionnaire was given to students in an introductory statistics class during the first week of the course. One question asked, ``How stressed have you been in the last 2 1\/2 weeks, on a scale of 0 to 10, with 0 being not at all stressed and 10 being as stressed as possible?” The students' responses are shown in the frequency table. Use this frequency table to answer the following questions.   Stress Levels of Students    Stress Level  Frequency    0  2    1  3    2  5    3  8    4  12    5  10    6  13    7  31    8  26    9  11    10  9       Which stress rating describes the greatest number of students? How many students responded with this rating?  Which stress rating describes the least number of students? How many students responded with this rating?  How many students were involved in this study?  How many students had a stress rating of 8 or more?       The most common stress level is 7, with 31 students responding with this rating.  The least common stress level is 0, with 2 students responding with this rating.  A total of 140 students were involved in this study.   The number of students who had a stress rating of 8 or more is:     "
},
{
  "id": "example-nfl-touchdowns-table",
  "level": "2",
  "url": "notes-Visualizing-Data-Through-Graphs.html#example-nfl-touchdowns-table",
  "type": "Example",
  "number": "4.3",
  "title": "",
  "body": "  The number of touchdown (TD) passes thrown by each of the 31 teams in the National Football League in the 2000 season are shown below:   NFL Touchdown Passes (2000 Season)    37  33  33  32  29  28  28  23  22  22  22    21  21  21  20  20  19  19  18  18  18  18    16  15  14  14  14  12  12  9  6       Construct a frequency table for the data of the number of touchdown passes thrown by each NFL team in the 2000 season.    To construct a frequency table, we first identify the unique values in the dataset and count how many times each value occurs. The frequency table for the NFL touchdown passes is as follows:   Frequency Table for NFL Touchdown Passes (2000 Season)    Value  Frequency    6  1    9  1    12  2    14  3    15  1    16  1    18  4    19  2    20  2      "
},
{
  "id": "def-bar-graphs",
  "level": "2",
  "url": "notes-Visualizing-Data-Through-Graphs.html#def-bar-graphs",
  "type": "Definition",
  "number": "4.6",
  "title": "Bar graph.",
  "body": " Bar graph    Bar graphs are best suited for comparing quantities or counts across distinct, independent categories. They utilize horizontal or vertical rectangular bars where the length or height of each bar directly corresponds to the numerical value it represents.   "
},
{
  "id": "notes-Visualizing-Data-Through-Graphs-8",
  "level": "2",
  "url": "notes-Visualizing-Data-Through-Graphs.html#notes-Visualizing-Data-Through-Graphs-8",
  "type": "Example",
  "number": "4.7",
  "title": "",
  "body": "  We return to the example of the NFL touchdown passes data to demonstrate how a bar graph can be constructed.    Using the frequency table , we constructed earlier, we can create a bar graph where the x-axis represents the number of touchdown passes and the y-axis represents the frequency of each value. This will visually display how often each number of touchdown passes occurred across the 31 teams. Each bar's height will correspond to the frequency of that particular number of touchdown passes, allowing us to quickly see which values were most common and which were rare.   Touchdown Passes Frequency Bar Graph   A vertical bar graph displaying the frequency of touchdown passes thrown by NFL teams in the 2000 season. The horizontal axis represents the number of touchdown passes, and the vertical axis represents the frequency of teams. Bars of varying heights correspond to each touchdown pass value, with the tallest bar at 18 touchdown passes representing a frequency of 4 teams.      "
},
{
  "id": "notes-Visualizing-Data-Through-Graphs-9",
  "level": "2",
  "url": "notes-Visualizing-Data-Through-Graphs.html#notes-Visualizing-Data-Through-Graphs-9",
  "type": "Example",
  "number": "4.9",
  "title": "",
  "body": "  A small business tracks the number of laptops sold over three months: January (15 units), February (22 units), and March (18 units). Determine which category goes on each axis to construct a vertical bar graph.    To construct a standard vertical bar graph, the independent nominal categories must be placed along the baseline axis, while the numerical quantitative metrics track along the vertical boundary:    Horizontal Axis (x-axis): Contains the Months (January, February, and March).     Vertical Axis (y-axis): Tracks the quantitative scale for Units Sold (ranging from 0 up to at least 22).     Each bar's height will correspond to the number of laptops sold in that month, allowing for an immediate visual comparison across the three categories.   Sample structure for a vertical bar graph.   A vertical bar chart displaying laptop units sold over three months. The horizontal axis represents the months, and the vertical axis scales from 0 to 25 to track units sold. January displays a bar reaching 15 units, February shows a bar reaching 22 units, and March shows a bar reaching 18 units.      "
},
{
  "id": "table-car-color-frequencies",
  "level": "2",
  "url": "notes-Visualizing-Data-Through-Graphs.html#table-car-color-frequencies",
  "type": "Table",
  "number": "4.11",
  "title": "Frequency of Total-Loss Collisions by Vehicle Color",
  "body": " Frequency of Total-Loss Collisions by Vehicle Color    Vehicle Color  Frequency (Accidents)    Blue  25    Green  52    Red  41    White  36    Black  39    Grey  23    "
},
{
  "id": "ex-car-color-bar-graph",
  "level": "2",
  "url": "notes-Visualizing-Data-Through-Graphs.html#ex-car-color-bar-graph",
  "type": "Example",
  "number": "4.12",
  "title": "",
  "body": "  Using the total-loss collision dataset compiled by the insurance provider in , construct a bar graph to visually model the distribution of vehicle colors.    To construct the bar graph, we map each vehicle color category along the horizontal axis (x-axis) and place the frequency counts along the vertical axis (y-axis). The height of each rectangular column corresponds exactly to its recorded category frequency:    Blue: 25 units high  Green: 52 units high  Red: 41 units high  White: 36 units high  Black: 39 units high  Grey: 23 units high    This layout provides an immediate visual hierarchy, showing that green cars are involved in more total-loss accidents than any other color in this sample group.   Bar Graph of Total-Loss Collisions by Vehicle Color   A vertical bar chart plotting car colors on the horizontal axis against collision frequencies on the vertical axis. The vertical axis scales from 0 to 60. Blue shows a bar reaching 25, Green reaches 52, Red reaches 41, White reaches 36, Black reaches 39, and Grey reaches 23.      "
},
{
  "id": "notes-Visualizing-Data-Through-Graphs-19",
  "level": "2",
  "url": "notes-Visualizing-Data-Through-Graphs.html#notes-Visualizing-Data-Through-Graphs-19",
  "type": "Checkpoint",
  "number": "4.14",
  "title": "",
  "body": "  A school cafeteria counts the number of fruit items sold in a day: 40 apples, 55 bananas, and 25 oranges. If you create a vertical bar graph, which item will have the tallest bar, and what value will it represent?    The category with the highest count is bananas. Therefore, bananas will have the tallest bar, representing a value of 55.   Vertical bar graph tracking daily cafeteria fruit sales.   A vertical bar graph tracking cafeteria sales. The horizontal axis represents the fruit types, and the vertical axis scales from 0 to 60. Apples show a bar at 40, bananas show the tallest bar at 55, and oranges show a bar at 25.      "
},
{
  "id": "def-histograms",
  "level": "2",
  "url": "notes-Visualizing-Data-Through-Graphs.html#def-histograms",
  "type": "Definition",
  "number": "4.16",
  "title": "Histogram.",
  "body": " Histogram   A histogram is a graphical tool used to display the frequency distribution of a single continuous numerical variable. Similar to a bar graph, it represents frequencies using the height of rectangular bars; however, its horizontal axis functions as a continuous number line. The data values are grouped into specific intervals, known as classes or bins. Unlike categorical bar charts, the vertical bars in a histogram must touch directly to accurately reflect the unbroken, sequential nature of the underlying scale.   "
},
{
  "id": "ex-workout-durations-histogram",
  "level": "2",
  "url": "notes-Visualizing-Data-Through-Graphs.html#ex-workout-durations-histogram",
  "type": "Example",
  "number": "4.17",
  "title": "Gym Workout Durations.",
  "body": " Gym Workout Durations   A gym records the workout durations of its members in minutes. The data is grouped into three continuous intervals: 0–20 minutes (5 people), 20–40 minutes (15 people), and 40–60 minutes (10 people). Determine the total sample size tracked across this histogram layout.    To find the total sample size, sum the frequencies represented by the height of each adjacent bar:   The histogram tracks a total sample size of 30 gym members.   Frequency distribution across adjacent numerical bins.   A frequency histogram tracking gym workout durations. The horizontal axis represents workout duration in minutes, with markers at 0, 20, 40, and 60. The vertical axis represents the number of members from 0 to 20. Three adjacent purple bars touch each other: the first bin from 0 to 20 minutes has a height of 5, the middle bin from 20 to 40 minutes has a height of 15, and the third bin from 40 to 60 minutes has a height of 10.      "
},
{
  "id": "ex-car-color-histogram-style",
  "level": "2",
  "url": "notes-Visualizing-Data-Through-Graphs.html#ex-car-color-histogram-style",
  "type": "Example",
  "number": "4.19",
  "title": "",
  "body": "  Using the total-loss collision dataset compiled by the insurance provider in , construct a histogram-style bar chart to visually model the distribution of vehicle colors.    To present this categorical data in a touching-bar format, we plot the vehicle color categories along the horizontal axis and the collision frequencies on the vertical axis. By adjusting our bar spacing properties, we can configure the rectangles to touch side-by-side:    Blue: Bar height is 25  Green: Bar height is 52  Red: Bar height is 41  White: Bar height is 36  Black: Bar height is 39  Grey: Bar height is 23     Histogram-Style Visual Distribution of Vehicle Colors   A vertical bar chart plotting car colors on the horizontal axis against frequencies on the vertical axis. The bars touch each other directly using a histogram style layout. Blue reaches 25, Green reaches 52, Red reaches 41, White reaches 36, Black reaches 39, and Grey reaches 23.      "
},
{
  "id": "ex-nutrition-weight-histogram-fixed",
  "level": "2",
  "url": "notes-Visualizing-Data-Through-Graphs.html#ex-nutrition-weight-histogram-fixed",
  "type": "Checkpoint",
  "number": "4.21",
  "title": "Nutrition Study Weight Distribution.",
  "body": " Nutrition Study Weight Distribution   Suppose that we have collected weights from 100 male subjects as part of a nutrition study. For our weight data, we have values ranging from a low of 121 pounds to a high of 263 pounds, giving a total span of: We can experiment with different bin allocations to summarize the data. Let us organize the dataset using a uniform interval width of 15, starting at a baseline value of 120.   Interval Frequency Distribution Table     Weight Interval (Pounds)  Frequency (Count)    120-134  4    135-149  14    150-164  16    165-179  28    180-194  12    195-209  8    210-224  7    225-239  6    240-254  2    255-269  3      Using the frequency chart, we construct a continuous frequency histogram. Each vertical bar spans an interval of 15 pounds on the horizontal axis, and the height matches the respective category count.   Frequency histogram of male subject weights with an interval width of 15.   A continuous frequency histogram tracking the weights of 100 male subjects. The horizontal axis charts weights from 120 to 270 pounds with main tick labels every 15 units. The vertical axis monitors frequencies from 0 to 30. Ten continuous, touching blue bars represent the frequencies: the first bar at 120 has a height of 4; followed by 14, 16; peaking at a height of 28 for the 165-180 pound bin; then stepping down to 12, 8, 7, 6, 2; and ending with a final bar height of 3 at the 255-270 pound boundary.      "
},
{
  "id": "def-line-graphs",
  "level": "2",
  "url": "notes-Visualizing-Data-Through-Graphs.html#def-line-graphs",
  "type": "Definition",
  "number": "4.23",
  "title": "Line graph.",
  "body": " Line graph    Line graphs are ideal for illustrating trends and demonstrating how numbers fluctuate over a continuous period. This format displays a sequential series of specific data points—frequently referred to as markers—that are connected by straight lines to show a clear trajectory.   "
},
{
  "id": "notes-Visualizing-Data-Through-Graphs-27",
  "level": "2",
  "url": "notes-Visualizing-Data-Through-Graphs.html#notes-Visualizing-Data-Through-Graphs-27",
  "type": "Example",
  "number": "4.24",
  "title": "",
  "body": "  An analyst records the stock price of a company over four days: Day 1 ( ), Day 2 ( ), Day 3 ( ), and Day 4 ( ). Describe the overall trend shown by connecting these data points on a line graph.    The line segments will move upward from Day 1 to Day 2, slope downward from Day 2 to Day 3, and then rise sharply from Day 3 to Day 4. Despite the mid-period dip on Day 3, the overall trend over the four-day period is upward.   Sample trajectory for a continuous trend line.   A continuous line graph tracking stock prices over 4 days. The horizontal axis tracks days 1 through 4, and the vertical axis spans from \\$5 to \\$25. A solid blue line connects the markers: rising from \\$10 on Day 1 to \\$15 on Day 2, dipping down to \\$12 on Day 3, and peaking sharply at \\$20 on Day 4.      "
},
{
  "id": "ex-car-color-line-graph",
  "level": "2",
  "url": "notes-Visualizing-Data-Through-Graphs.html#ex-car-color-line-graph",
  "type": "Example",
  "number": "4.26",
  "title": "",
  "body": "  Using the total-loss collision dataset compiled by the insurance provider in , construct a line graph to visually model the distribution of vehicle colors.    To construct a line graph for this dataset, we plot the vehicle color categories along the horizontal axis and the collision frequencies on the vertical axis. Instead of drawing columns, we plot a single coordinate point for each category and connect them sequentially with straight line segments:    Blue: Point at 25  Green: Point at 52  Red: Point at 41  White: Point at 36  Black: Point at 39  Grey: Point at 23    This visualization allows us to trace the ups and downs across categories, showing a sharp peak at Green and a drop at Grey.   Line Graph of Total-Loss Collisions by Vehicle Color   A line graph plotting car colors on the horizontal axis against collision frequencies on the vertical axis. The vertical axis scales from 0 to 60. A line connects data markers starting at Blue (25), rising sharply to Green (52), dropping to Red (41) and White (36), rising slightly to Black (39), and falling to its lowest point at Grey (23).      "
},
{
  "id": "notes-Visualizing-Data-Through-Graphs-29",
  "level": "2",
  "url": "notes-Visualizing-Data-Through-Graphs.html#notes-Visualizing-Data-Through-Graphs-29",
  "type": "Checkpoint",
  "number": "4.28",
  "title": "",
  "body": "  A patient's body temperature is recorded every hour: Hour 1 ( ), Hour 2 ( ), Hour 3 ( ), and Hour 4 ( ). Between which two hours does the line graph show the sharpest increase?    To find the sharpest increase, we calculate the differences between consecutive hourly measurements:  The increase from Hour 1 to Hour 2 is: The increase from Hour 2 to Hour 3 is:   Comparing these calculations, the graph shows the sharpest increase between Hour 1 and Hour 2 .   Hourly tracking of patient body temperature.   A continuous line graph tracking a patient's temperature over 4 hours. The horizontal axis maps hours 1 to 4, and the vertical axis scales from 97 to 103 degrees Fahrenheit. A solid blue line rises from 98.6 degrees at Hour 1 to 100.2 degrees at Hour 2, climbs further to 101.5 degrees at Hour 3, and then falls down to 99.1 degrees at Hour 4.      "
},
{
  "id": "def-pie-charts",
  "level": "2",
  "url": "notes-Visualizing-Data-Through-Graphs.html#def-pie-charts",
  "type": "Definition",
  "number": "4.30",
  "title": "Pie Chart.",
  "body": " Pie Chart    Pie charts are designed for visualizing proportions and showing how a single, cohesive entity is divided into individual parts. The chart consists of a circle divided into sectors, or slices, where the arc length and central angle of each slice are strictly proportional to the percentage of the total dataset it represents.   "
},
{
  "id": "ex-budget-pie-chart",
  "level": "2",
  "url": "notes-Visualizing-Data-Through-Graphs.html#ex-budget-pie-chart",
  "type": "Example",
  "number": "4.31",
  "title": "",
  "body": "  A budget consists of for Rent, for Food, and for Utilities. Calculate the percentage of the pie chart slice that represents Rent.    First, find the total budget by summing the individual expenses:   Next, divide the Rent cost by the total budget to find its proportion:   Multiply by 100 to convert the decimal into a percentage:   The Rent slice will take up exactly half ( 50% ) of the pie chart.   Proportional slice distribution in a circular layout.   A circular pie chart divided into three colored budget sections. The bottom half of the circle is blue and represents Rent at 50 percent. The top right quadrant is green and represents Food at 25 percent. The top left quadrant is orange and represents Utilities at 25 percent.      "
},
{
  "id": "ex-car-color-pie-chart",
  "level": "2",
  "url": "notes-Visualizing-Data-Through-Graphs.html#ex-car-color-pie-chart",
  "type": "Example",
  "number": "4.33",
  "title": "",
  "body": "  Using the total-loss collision dataset compiled by the insurance provider in , construct a pie chart to visually model the distribution of vehicle colors.    To construct a pie chart, we convert each category's frequency into a proportional central angle of a circle ( ). Using the total sample size ( ), the angle for each slice is calculated using the formula :    Blue:  ( )  Green:  ( )  Red:  ( )  White:  ( )  Black:  ( )  Grey:  ( )    Each sector is drawn sequentially around the center of the circle to construct the final visual proportion.   Pie Chart of Total-Loss Collisions by Vehicle Color   A circular pie chart divided into six colored sectors representing the proportion of vehicle collisions. Green is the largest slice at 24.1 percent, followed by Red at 19 percent, Black at 18.1 percent, White at 16.7 percent, Blue at 11.6 percent, and Grey as the smallest slice at 10.6 percent.      "
},
{
  "id": "notes-Visualizing-Data-Through-Graphs-34",
  "level": "2",
  "url": "notes-Visualizing-Data-Through-Graphs.html#notes-Visualizing-Data-Through-Graphs-34",
  "type": "Checkpoint",
  "number": "4.35",
  "title": "",
  "body": "  A survey of 200 people shows that 100 prefer vanilla ice cream, 60 prefer chocolate, and 40 prefer strawberry. What central angle degree should be used to draw the slice for chocolate?    The proportion for chocolate is: Since a full circle has , multiply the proportion by 360 to find the central angle: The chocolate slice requires a central angle of .   Pie chart representing ice cream flavor preferences.   A circular pie chart divided into three distinct sections. The right half of the circle is yellow and represents Vanilla at 50 percent. The bottom-left sector is brown and represents Chocolate with a 108-degree angle at 30 percent. The top-left sector is pink and represents Strawberry at 20 percent.      "
},
{
  "id": "exercise-history-test-scores",
  "level": "2",
  "url": "notes-Visualizing-Data-Through-Graphs.html#exercise-history-test-scores",
  "type": "Checkpoint",
  "number": "4.37",
  "title": "",
  "body": "  The following dataset represents the scores of students on a recent history test:  80, 50, 50, 90, 70, 70, 100, 60, 70, 80, 70, 50, 90, 100, 80, 70, 30, 80, 80, 70, 100, 60, 60, 50    Complete a frequency table for the test scores.  Construct a bar graph of the data.  Construct a line graph of the data.  Construct a pie chart of the data.  Construct a histogram of the data.        (a) Frequency Table: Sorting and counting each distinct score yields the following frequency distribution:   Frequency Distribution of History Test Scores    Test Score  Frequency (Students)   30 1  50 4  60 3  70 6  80 5  90 2  100 3      (b) Bar Graph: We represent each distinct score on the horizontal axis and its frequency count on the vertical axis using separated vertical columns:   Bar Graph of Test Scores   A vertical bar chart showing test scores on the horizontal axis and student frequency on the vertical axis. Bars are at 30 with height 1, 50 with height 4, 60 with height 3, 70 with height 6, 80 with height 5, 90 with height 2, and 100 with height 3.       (c) Line Graph: Using the same axes as the bar chart, coordinate markers are plotted at each data junction and linked sequentially using line tracks:   Line Graph of Test Scores   A line graph mapping test scores to the number of students. Circles show points at score 30 with frequency 1, 50 with 4, 60 with 3, 70 with 6, 80 with 5, 90 with 2, and 100 with 3, connected by a trendline.       (d) Pie Chart: To map out global proportions, we compute percentage shares based on the total sample of students ( ):    Score 30:  ( )  Score 50:  ( )  Score 60:  ( )  Score 70:  ( )  Score 80:  ( )  Score 90:  ( )  Score 100:  ( )     Pie Chart of Test Score Distributions   A pie chart dividing the student distribution among scores. Slices represent Score 30 at 4.2 percent, Score 50 at 16.7 percent, Score 60 at 12.5 percent, Score 70 at 25 percent, Score 80 at 20.8 percent, Score 90 at 8.3 percent, and Score 100 at 12.5 percent.       (e) Histogram: We group the scores into 10-point bins along a continuous horizontal axis causing the bars to lock tightly side-by-side:    [25, 35): 1 student (score 30)  [35, 45): 0 students  [45, 55): 4 students (scores of 50)  [55, 65): 3 students (scores of 60)  [65, 75): 6 students (scores of 70)  [75, 85): 5 students (scores of 80)  [85, 95): 2 students (scores of 90)  [95, 105]: 3 students (scores of 100)     Histogram of Test Score Distributions   A histogram displaying the continuous interval distribution of test scores. The bars touch each other directly: the bin from 25 to 35 has a height of 1, 45 to 55 has a height of 4, 55 to 65 has a height of 3, 65 to 75 reaches the peak at 6, 75 to 85 has a height of 5, 85 to 95 has a height of 2, and 95 to 105 has a height of 3.       (e) Histogram: Unlike the categorical charts above, a true histogram tracks quantitative continuous intervals. We group the scores into 20-point bins along a continuous horizontal axis causing the bars to lock tightly side-by-side:    [20, 40): 1 student (score 30)  [40, 60): 4 students (scores of 50)  [60, 80): 9 students (scores of 60 and 70)  [80, 100): 7 students (scores of 80 and 90)  [100, 120): 3 students (scores of 100)     Histogram of Test Score Distributions   A histogram displaying the continuous 20-point interval distribution of test scores. The bars touch each other directly: the bin from 20 to 40 has a height of 1, 40 to 60 has a height of 4, 60 to 80 reaches the peak at 9, 80 to 100 has a height of 7, and 100 to 120 has a height of 3.      "
},
{
  "id": "sec-measures-of-center-spread",
  "level": "1",
  "url": "sec-measures-of-center-spread.html",
  "type": "Section",
  "number": "",
  "title": "4.2 Measures of Center and Spread",
  "body": " 4.2 Measures of Center and Spread  Understanding distributions and their measures of center and spread is crucial for solving many statistics problems on the math practice. These concepts help summarize data sets concisely and allow for easier comparison and interpretation.  The center of a distribution describes a typical value of the data set and can be represented by the mean, median, or mode. The spread of a distribution indicates how much the data varies and can be measured using the range and standard deviation.      Mean  The mean, or average, is calculated by summing all values in a data set and dividing by the number of values. It represents a central point in the data. The mean is a measure of center that is sensitive to every value in the data set, making it particularly useful when the values are relatively close to each other.  The Greek letter sigma, , called a symbol of summation, is used to indicate the sum of data items. The notation , read ``the sum of x,'' means to add all the data items in a given data set. We can use this symbol to give a formula for calculating the mean. To calculate the mean, add up all the values in the data set and then divide by the number of values. This gives an average value that can be used to represent the entire data set. The mean of a set of data is the sum of the data values divided by the number of values;      Find the mean of the data set .    Sum the values ( ) and divide by the number of values ( ). The mean is .      Marci's exam scores for her last math class were: . Find the mean of these exam scores and round it appropriately.    To find the mean, sum the scores and divide by the total number of exams:   Typically, we round means to one more decimal place than the original data had. Since the original scores are whole numbers, we round our final answer to one decimal place. Therefore, we round to .      The number of touchdown (TD) passes thrown by each of the 31 teams in the National Football League in the 2000 season are shown below:   NFL Touchdown Passes (2000 Season)    37  33  33  32  29  28  28  23  22  22  22    21  21  21  20  20  19  19  18  18  18  18    16  15  14  14  14  12  12  9  6       Find the mean number of touchdown passes thrown during this season.    First, find the sum of all the values in the data set:     Next, divide by , which is the total number of data values:   Following the standard rounding convention, we round the mean to one more decimal place than the original data. Since the raw touchdown counts are whole numbers, we round our final answer to one decimal place, giving .  It is most correct to report that The mean number of touchdown passes thrown in the NFL in the 2000 season was 20.5 passes, though it is common to see the more casual term average used in place of mean.       The price of a jar of peanut butter at 5 stores was: , , , , and . Find the mean price.    First, find the sum of the prices across all 5 stores:   Next, divide the total sum by the number of stores ( ):   Following the standard rounding rule for the mean (rounding to one more decimal place than the original data), we round from two decimal places to three decimal places. The exact mean price is (or approximately when rounded to the nearest standard cent).        Median  The median is the middle value of a data set when the values are arranged in ascending order.  To find the median of a dataset:    Arrange the data in order from smallest to largest.  If the number of items in the dataset is odd , the median is the exact middle number in the ordered dataset.  If the number of items in the dataset is even , the median is the mean of the two middle numbers in the ordered dataset.     The median is a useful measure of center because it is not affected by extremely high or low values (outliers). This makes it a better representative of the data set when there are outliers present.   Odd Number of Values   Find the median of .    The data set is already in order. The median is .     Even Number of Values   Find the median of .    The middle values are and . The median is .      Returning to the football touchdown data from , find the median number of touchdown passes thrown in the NFL during the 2000 season.    To find the median, we start by listing the data in order. As seen in , the data is already in decreasing order, so we can work with it without needing to reorder it first.  Since there are data values (an odd number), the median will be the middle number, which is the 16th data value. We can compute its position by evaluating and rounding up to , which leaves exactly values below it and values above it.  Counting to the 16th data value in the ordered list yields . Therefore, the median number of touchdown passes in the 2000 season was passes. Notice that for this data, the median is fairly close to the mean of that we calculated earlier in .      Find the median of these quiz scores:     We start by listing the data in ascending order:   Since there are data values (an even number), there is no single middle number. Instead, we find the mean of the two middle numbers, which are the 5th and 6th values: and .  Calculating their average gives: Therefore, the median quiz score was .      The price of a jar of peanut butter at 5 stores was: , , , , and . Find the median price.    First, arrange the prices in ascending order:   Since there is an odd number of data values ( ), the median is the exact middle number, which is the 3rd value in our ordered list.  The middle value is . Therefore, the median price for a jar of peanut butter is .        Mode  The mode is the value that appears most frequently (often) in a data set.  A data set can have no mode, one mode, or multiple modes.  The mode is useful for understanding which values are most common in the data set. The mode is particularly useful for categorical data, where we are interested in knowing the most frequent category.     Find the mode of the data set .    The mode is because it appears most frequently.      In a vehicle color survey, the following frequency data was collected:   Vehicle Color Survey Frequencies    Color  Frequency    Blue  3    Green  5    Red  4    White  3    Black  2    Grey  3     Find the mode of this data set.    For this data, Green is the mode, since it is the data value that occurred most frequently with a count of .  It is possible for a data set to have more than one mode if several categories share the same highest frequency, or no modes if every single category occurs only once.      Reviewers were asked to rate a product on a scale of 1 to 5. The results are shown in the frequency table below:   Product Rating Frequencies    Rating  Frequency    1  4    2  8    3  7    4  3    5  1     Find:  The mean rating  The median rating  The mode rating      First, determine the total number of reviewers ( ) by summing the frequencies:      To find the mean rating, calculate the weighted sum of the ratings and divide by the total number of reviewers:   Rounding to one more decimal place than the original data gives a mean rating of .    Since there are data values (an odd number), the median is the middle value, located at position . Accumulating frequencies from the lowest rating up to the 12th value:  Ratings of 1 account for the first values (positions 1–4).  Ratings of 2 account for the next values (positions 5–12).  The 12th value falls exactly at the end of the 2-rating group, so the median rating is .    The mode is the value with the highest frequency. A rating of has the highest frequency with reviews, so the mode rating is .           Measures of Spread   Measures of spread describe how much the data varies. Two common measures are range and standard deviation . These measures help to understand the variability within the data set.    Consider these three sets of quiz scores:      Section A:       Section B:       Section C:       All three of these sets of data have a mean of and a median of , yet the sets of scores are clearly quite different. In Section A, everyone had the same score. In Section B, half the class got no points and the other half got a perfect score, assuming this was a 10-point quiz. Section C was not as consistent as Section A, but not as widely varied as Section B.  In addition to the mean and median, which are measures of the typical or middle value, we also need a measure of how spread out or varied each data set is. There are several ways to measure this spread of the data. The first is the simplest and is called the range .   Range  The range is the difference between the maximum and minimum values in a data set. It gives a quick sense of the spread of the data. A larger range indicates greater variability, while a smaller range indicates less variability.     Find the range of the data set .    The range is .      Using the quiz scores from above, find the range for Section A, Section B, and Section C.    The range is calculated by subtracting the minimum score from the maximum score in each data set:     For Section A, the maximum value is and the minimum value is . The range is .    For Section B, the maximum value is and the minimum value is . The range is .    For Section C, the maximum value is and the minimum value is . The range is .       A second measure of spread, and one that is dependent on all of the data items, is called the standard deviation .   Standard Deviation  The standard deviation is a number that summarizes how far each data item differs from the mean. In comparing datasets, a dataset with a smaller standard deviation shows that the data are less spread out around the mean. A dataset with a larger standard deviation shows that the data are more spread out around the mean.     Using the quiz scores from , Section A, Section B, and Section C all have the same mean of 5. However, they have very different spreads. Which sample do you think has the largest standard deviation? What does this measure tell us when comparing the spread of the three samples?    Section B has the largest standard deviation because its scores are the most spread out from the mean. The standard deviation is a more precise measure of spread than the range because it accounts for how every individual data point differs from the mean, rather than just looking at the extremes.     Approximating Standard Deviation Without Computation  To estimate the standard deviation of a small dataset, follow these steps:      Find the Mean: Calculate the average of your data points to establish the central point.     Find individual distances: Determine how far each data point sits from that mean value. Disregard negative signs.     Average the distances: Sum the distances and divide by the number of values to get a baseline average deviation.     Adjust upward: Select an estimate slightly higher than your average distance, as squaring the deviations shifts the geometric mean upward.        Use the data 1, 2, 3, 5, 6, 7. Without actually computing the standard deviation, which of the following best approximates the standard deviation?      2    Correct. The mean is 4 and the range is 6. The standard deviation represents the typical distance from the mean, so 2 is the best estimate.      6    Incorrect. A standard deviation of 6 would imply the data points span much further from the mean than they actually do.      10    Incorrect. The standard deviation cannot be larger than the total range of the dataset.      20    Incorrect. This value is much too large for a small dataset spanning from 1 to 7.       Step 1: Find the Mean. Find the central balance point of the data:    Step 2: Find the Absolute Distances. Calculate how far each value is from the mean of :    Step 3: Average the Distances. Find the average of these absolute deviations:    Step 4: Approximate. The true standard deviation is always slightly higher than the simple average distance. Therefore, we approximate the standard deviation to be a value just above 2 .        Effect of Outliers  Outliers are values significantly different from other values in a data set. They can greatly affect summary statistics like the mean, median, mode, range, and standard deviation.  Consider the baseline data set where the outlier is . The sections below highlight how this outlier impacts each statistic:    Effect on Mean  Outliers can significantly skew the mean of a data set. Including it, the mean is skewed higher. Removing it, the mean is more representative of the majority of the data.    Effect on Median  The median is less affected by outliers because it is based on the middle values of the data set. In the data set , the median remains regardless of the outlier.    Effect on Mode  Outliers have little to no effect on the mode since the mode is determined by the most frequently occurring values. In the data set , the mode is still .    Effect on Range  Outliers can drastically increase the range of a data set since the range is the difference between the maximum and minimum values. In the data set , the range is , which is significantly affected by the outlier.    Effect on Standard Deviation  Outliers increase the standard deviation because they increase the average distance from the mean. The standard deviation is much larger when the outlier is included compared to when it is excluded.         Practice Questions    Find the mean of the data set .    First, sum all the values in the data set: Next, divide the sum by the total number of values ( ):       Find the median of the data set .    First, arrange the data set in ascending order: . Since there is an odd number of values ( ), the median is the exact middle value. The middle value is .      Find the mode of the data set .    Count the frequency of each value in the set:  appears time  appears times  appears times  appears time  The value appears most frequently, so the mode is .      Find the range of the data set .    Identify the maximum and minimum values in the data set: Subtract the minimum value from the maximum value:       If the mean of is , what is ?    The formula for the mean of values is: Simplify the numerator by adding the known constants: Multiply both sides by to isolate the numerator: Subtract from both sides to find :       Compute the mean for each of the following data sets:  Set A:  Set B:  Using these means and without actually computing the standard deviation, can you tell which dataset has a lower standard deviation? Does a lower standard deviation imply that the dataset is less spread out or more spread out than the other dataset?    Both datasets have a mean of . We calculate this by summing the values and dividing by :    Without calculating the exact standard deviation, we can determine that Set A has the lower standard deviation. Every data point in Set A is identical to the mean, resulting in a standard deviation of exactly .  A lower standard deviation implies that the dataset is less spread out than the other dataset. It indicates that the individual data entries cluster tightly around the center point rather than deviating far from it.         Frequently Asked Questions    What is the difference between mean, median, and mode?  The mean is the average (sum of values divided by count), the median is the middle value when data is ordered, and the mode is the most frequently occurring value. The median is less affected by outliers than the mean.    What is standard deviation?  Standard deviation measures the typical spread from the mean—it is the average distance between each data point and the mean. A larger standard deviation indicates greater variability in the data set.    How do I find the median of an even number of values?  When there is an even number of values, the median is the average of the two middle values. First arrange the data in order, then identify the two middle values and calculate their average.     "
},
{
  "id": "def-mean",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#def-mean",
  "type": "Definition",
  "number": "4.44",
  "title": "Mean.",
  "body": " Mean  The mean, or average, is calculated by summing all values in a data set and dividing by the number of values. It represents a central point in the data. The mean is a measure of center that is sensitive to every value in the data set, making it particularly useful when the values are relatively close to each other.  The Greek letter sigma, , called a symbol of summation, is used to indicate the sum of data items. The notation , read ``the sum of x,'' means to add all the data items in a given data set. We can use this symbol to give a formula for calculating the mean. To calculate the mean, add up all the values in the data set and then divide by the number of values. This gives an average value that can be used to represent the entire data set. The mean of a set of data is the sum of the data values divided by the number of values;   "
},
{
  "id": "example-mean",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#example-mean",
  "type": "Example",
  "number": "4.45",
  "title": "",
  "body": "  Find the mean of the data set .    Sum the values ( ) and divide by the number of values ( ). The mean is .   "
},
{
  "id": "example-rounding-mean",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#example-rounding-mean",
  "type": "Example",
  "number": "4.46",
  "title": "",
  "body": "  Marci's exam scores for her last math class were: . Find the mean of these exam scores and round it appropriately.    To find the mean, sum the scores and divide by the total number of exams:   Typically, we round means to one more decimal place than the original data had. Since the original scores are whole numbers, we round our final answer to one decimal place. Therefore, we round to .   "
},
{
  "id": "ex-nfl-touchdowns-mean",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#ex-nfl-touchdowns-mean",
  "type": "Checkpoint",
  "number": "4.47",
  "title": "",
  "body": "  The number of touchdown (TD) passes thrown by each of the 31 teams in the National Football League in the 2000 season are shown below:   NFL Touchdown Passes (2000 Season)    37  33  33  32  29  28  28  23  22  22  22    21  21  21  20  20  19  19  18  18  18  18    16  15  14  14  14  12  12  9  6       Find the mean number of touchdown passes thrown during this season.    First, find the sum of all the values in the data set:     Next, divide by , which is the total number of data values:   Following the standard rounding convention, we round the mean to one more decimal place than the original data. Since the raw touchdown counts are whole numbers, we round our final answer to one decimal place, giving .  It is most correct to report that The mean number of touchdown passes thrown in the NFL in the 2000 season was 20.5 passes, though it is common to see the more casual term average used in place of mean.    "
},
{
  "id": "exercise-peanut-butter-mean",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#exercise-peanut-butter-mean",
  "type": "Checkpoint",
  "number": "4.49",
  "title": "",
  "body": "  The price of a jar of peanut butter at 5 stores was: , , , , and . Find the mean price.    First, find the sum of the prices across all 5 stores:   Next, divide the total sum by the number of stores ( ):   Following the standard rounding rule for the mean (rounding to one more decimal place than the original data), we round from two decimal places to three decimal places. The exact mean price is (or approximately when rounded to the nearest standard cent).   "
},
{
  "id": "def-median",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#def-median",
  "type": "Definition",
  "number": "4.50",
  "title": "Median.",
  "body": " Median  The median is the middle value of a data set when the values are arranged in ascending order.  To find the median of a dataset:    Arrange the data in order from smallest to largest.  If the number of items in the dataset is odd , the median is the exact middle number in the ordered dataset.  If the number of items in the dataset is even , the median is the mean of the two middle numbers in the ordered dataset.    "
},
{
  "id": "example-median-odd",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#example-median-odd",
  "type": "Example",
  "number": "4.51",
  "title": "Odd Number of Values.",
  "body": " Odd Number of Values   Find the median of .    The data set is already in order. The median is .   "
},
{
  "id": "example-median-even",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#example-median-even",
  "type": "Example",
  "number": "4.52",
  "title": "Even Number of Values.",
  "body": " Even Number of Values   Find the median of .    The middle values are and . The median is .   "
},
{
  "id": "ex-nfl-touchdowns-median",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#ex-nfl-touchdowns-median",
  "type": "Checkpoint",
  "number": "4.53",
  "title": "",
  "body": "  Returning to the football touchdown data from , find the median number of touchdown passes thrown in the NFL during the 2000 season.    To find the median, we start by listing the data in order. As seen in , the data is already in decreasing order, so we can work with it without needing to reorder it first.  Since there are data values (an odd number), the median will be the middle number, which is the 16th data value. We can compute its position by evaluating and rounding up to , which leaves exactly values below it and values above it.  Counting to the 16th data value in the ordered list yields . Therefore, the median number of touchdown passes in the 2000 season was passes. Notice that for this data, the median is fairly close to the mean of that we calculated earlier in .   "
},
{
  "id": "exercise-quiz-scores-median",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#exercise-quiz-scores-median",
  "type": "Checkpoint",
  "number": "4.54",
  "title": "",
  "body": "  Find the median of these quiz scores:     We start by listing the data in ascending order:   Since there are data values (an even number), there is no single middle number. Instead, we find the mean of the two middle numbers, which are the 5th and 6th values: and .  Calculating their average gives: Therefore, the median quiz score was .   "
},
{
  "id": "exercise-peanut-butter-median",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#exercise-peanut-butter-median",
  "type": "Checkpoint",
  "number": "4.55",
  "title": "",
  "body": "  The price of a jar of peanut butter at 5 stores was: , , , , and . Find the median price.    First, arrange the prices in ascending order:   Since there is an odd number of data values ( ), the median is the exact middle number, which is the 3rd value in our ordered list.  The middle value is . Therefore, the median price for a jar of peanut butter is .   "
},
{
  "id": "def-mode",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#def-mode",
  "type": "Definition",
  "number": "4.56",
  "title": "Mode.",
  "body": " Mode  The mode is the value that appears most frequently (often) in a data set.  A data set can have no mode, one mode, or multiple modes.  The mode is useful for understanding which values are most common in the data set. The mode is particularly useful for categorical data, where we are interested in knowing the most frequent category.  "
},
{
  "id": "example-mode",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#example-mode",
  "type": "Example",
  "number": "4.57",
  "title": "",
  "body": "  Find the mode of the data set .    The mode is because it appears most frequently.   "
},
{
  "id": "example-vehicle-color-mode",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#example-vehicle-color-mode",
  "type": "Example",
  "number": "4.58",
  "title": "",
  "body": "  In a vehicle color survey, the following frequency data was collected:   Vehicle Color Survey Frequencies    Color  Frequency    Blue  3    Green  5    Red  4    White  3    Black  2    Grey  3     Find the mode of this data set.    For this data, Green is the mode, since it is the data value that occurred most frequently with a count of .  It is possible for a data set to have more than one mode if several categories share the same highest frequency, or no modes if every single category occurs only once.   "
},
{
  "id": "exercise-product-ratings",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#exercise-product-ratings",
  "type": "Checkpoint",
  "number": "4.60",
  "title": "",
  "body": "  Reviewers were asked to rate a product on a scale of 1 to 5. The results are shown in the frequency table below:   Product Rating Frequencies    Rating  Frequency    1  4    2  8    3  7    4  3    5  1     Find:  The mean rating  The median rating  The mode rating      First, determine the total number of reviewers ( ) by summing the frequencies:      To find the mean rating, calculate the weighted sum of the ratings and divide by the total number of reviewers:   Rounding to one more decimal place than the original data gives a mean rating of .    Since there are data values (an odd number), the median is the middle value, located at position . Accumulating frequencies from the lowest rating up to the 12th value:  Ratings of 1 account for the first values (positions 1–4).  Ratings of 2 account for the next values (positions 5–12).  The 12th value falls exactly at the end of the 2-rating group, so the median rating is .    The mode is the value with the highest frequency. A rating of has the highest frequency with reviews, so the mode rating is .      "
},
{
  "id": "def-measures-of-spread",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#def-measures-of-spread",
  "type": "Definition",
  "number": "4.62",
  "title": "Measures of Spread.",
  "body": " Measures of Spread   Measures of spread describe how much the data varies. Two common measures are range and standard deviation . These measures help to understand the variability within the data set.   "
},
{
  "id": "sec-measures-of-center-spread-24",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#sec-measures-of-center-spread-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "range "
},
{
  "id": "sec-measures-of-center-spread-25",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#sec-measures-of-center-spread-25",
  "type": "Note",
  "number": "4.63",
  "title": "Range.",
  "body": " Range  The range is the difference between the maximum and minimum values in a data set. It gives a quick sense of the spread of the data. A larger range indicates greater variability, while a smaller range indicates less variability.  "
},
{
  "id": "example-range",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#example-range",
  "type": "Example",
  "number": "4.64",
  "title": "",
  "body": "  Find the range of the data set .    The range is .   "
},
{
  "id": "example-quiz-scores-range",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#example-quiz-scores-range",
  "type": "Example",
  "number": "4.65",
  "title": "",
  "body": "  Using the quiz scores from above, find the range for Section A, Section B, and Section C.    The range is calculated by subtracting the minimum score from the maximum score in each data set:     For Section A, the maximum value is and the minimum value is . The range is .    For Section B, the maximum value is and the minimum value is . The range is .    For Section C, the maximum value is and the minimum value is . The range is .      "
},
{
  "id": "sec-measures-of-center-spread-29",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#sec-measures-of-center-spread-29",
  "type": "Note",
  "number": "4.66",
  "title": "Standard Deviation.",
  "body": " Standard Deviation  The standard deviation is a number that summarizes how far each data item differs from the mean. In comparing datasets, a dataset with a smaller standard deviation shows that the data are less spread out around the mean. A dataset with a larger standard deviation shows that the data are more spread out around the mean.  "
},
{
  "id": "example-quiz-scores-sd",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#example-quiz-scores-sd",
  "type": "Example",
  "number": "4.67",
  "title": "",
  "body": "  Using the quiz scores from , Section A, Section B, and Section C all have the same mean of 5. However, they have very different spreads. Which sample do you think has the largest standard deviation? What does this measure tell us when comparing the spread of the three samples?    Section B has the largest standard deviation because its scores are the most spread out from the mean. The standard deviation is a more precise measure of spread than the range because it accounts for how every individual data point differs from the mean, rather than just looking at the extremes.   "
},
{
  "id": "exercise-approx-sd",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#exercise-approx-sd",
  "type": "Checkpoint",
  "number": "4.68",
  "title": "",
  "body": "  Use the data 1, 2, 3, 5, 6, 7. Without actually computing the standard deviation, which of the following best approximates the standard deviation?      2    Correct. The mean is 4 and the range is 6. The standard deviation represents the typical distance from the mean, so 2 is the best estimate.      6    Incorrect. A standard deviation of 6 would imply the data points span much further from the mean than they actually do.      10    Incorrect. The standard deviation cannot be larger than the total range of the dataset.      20    Incorrect. This value is much too large for a small dataset spanning from 1 to 7.       Step 1: Find the Mean. Find the central balance point of the data:    Step 2: Find the Absolute Distances. Calculate how far each value is from the mean of :    Step 3: Average the Distances. Find the average of these absolute deviations:    Step 4: Approximate. The true standard deviation is always slightly higher than the simple average distance. Therefore, we approximate the standard deviation to be a value just above 2 .   "
},
{
  "id": "exercise-practice-1",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#exercise-practice-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Find the mean of the data set .    First, sum all the values in the data set: Next, divide the sum by the total number of values ( ):    "
},
{
  "id": "exercise-practice-2",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#exercise-practice-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Find the median of the data set .    First, arrange the data set in ascending order: . Since there is an odd number of values ( ), the median is the exact middle value. The middle value is .   "
},
{
  "id": "exercise-practice-3",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#exercise-practice-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Find the mode of the data set .    Count the frequency of each value in the set:  appears time  appears times  appears times  appears time  The value appears most frequently, so the mode is .   "
},
{
  "id": "exercise-practice-4",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#exercise-practice-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Find the range of the data set .    Identify the maximum and minimum values in the data set: Subtract the minimum value from the maximum value:    "
},
{
  "id": "exercise-practice-5",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#exercise-practice-5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  If the mean of is , what is ?    The formula for the mean of values is: Simplify the numerator by adding the known constants: Multiply both sides by to isolate the numerator: Subtract from both sides to find :    "
},
{
  "id": "exercise-compare-sd-spread",
  "level": "2",
  "url": "sec-measures-of-center-spread.html#exercise-compare-sd-spread",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  Compute the mean for each of the following data sets:  Set A:  Set B:  Using these means and without actually computing the standard deviation, can you tell which dataset has a lower standard deviation? Does a lower standard deviation imply that the dataset is less spread out or more spread out than the other dataset?    Both datasets have a mean of . We calculate this by summing the values and dividing by :    Without calculating the exact standard deviation, we can determine that Set A has the lower standard deviation. Every data point in Set A is identical to the mean, resulting in a standard deviation of exactly .  A lower standard deviation implies that the dataset is less spread out than the other dataset. It indicates that the individual data entries cluster tightly around the center point rather than deviating far from it.   "
},
{
  "id": "notes-empirical-rule",
  "level": "1",
  "url": "notes-empirical-rule.html",
  "type": "Section",
  "number": "",
  "title": "4.3 The Empirical Rule",
  "body": " 4.3 The Empirical Rule   Bell-Curve    A bell curve is used in statistics to represent the continuous probability distribution of a naturally occurring variable. It is perfectly symmetrical, showing that data near the mean occurs more frequently than data far from the mean.    For example, standardized test scores, human heights, and manufacturing errors typically follow this bell-shaped trajectory when plotted in mass quantities.    An instructor plots final exam grades and notes they follow a normal distribution with a mean score of . Describe how the shape of this curve changes if you look at scores moving away from 75 in either direction.   Symmetrical distribution curve centered around a population mean.   A symmetrical, bell-shaped probability density curve tracking exam scores. The horizontal axis represents exam scores from 40 to 110. The peak of the smooth cyan curve sits directly above the mean score of 75, marked by a vertical dashed red line. The curve slopes downward symmetrically as it moves left toward 45 or right toward 105, tapering off cleanly near the horizontal axis at the extremes.       The highest point of the curve sits directly above the mean score of 75. As you move outward toward lower scores (left) or higher scores (right) standard deviations 15 away from the mean, the curve slopes downward symmetrically. The frequency of scores decreases as you move further from the mean, flattening out as it approaches the extremes of 45 and 105 where very few students scored.      If a dataset of adult heights perfectly matches a bell curve layout, what percentage of the population profile falls below the exact center peak value of the distribution?    Because a true normal distribution curve is perfectly symmetrical, the center peak represents both the mean and the median. Therefore, exactly of the population data falls below this center peak line.   Symmetrical normal distribution curve with the lower half shaded.   A symmetrical bell curve where the entire left half of the area under the curve—from the far left up to the center peak—is shaded in light blue, visually representing exactly 50 percent of the total distribution population.       Note that the standard deviation is a measure of how spread out data points are from their mean. To determine if a specific data value is far from the center, you calculate exactly how many standard deviations it sits away from that mean.  A data distribution shows how data points cluster or spread across their range of values. A normal distribution is a specific, symmetrical bell-shaped curve with predictable patterns. Exactly half (50%) of the data lies below the mean, and half lies above it, as illustrated in .   Normal Distribution   A normal distribution is a symmetrical, bell-shaped probability distribution where the mean, median, and mode are all equal.     Normal Distribution to IQ Scores   IQ scores follow a normal distribution with a mean of 100 and a standard deviation of 16. Sketch the normal curve for this example and be sure to denote one, two, and three standard deviations from the mean.    The normal curve for IQ scores would be centered at 100, with the highest point of the bell curve directly above this mean. One standard deviation from the mean would be at 84 (100 - 16) and 116 (100 + 16). Two standard deviations from the mean would be at 68 (100 - 32) and 132 (100 + 32). Three standard deviations from the mean would be at 52 (100 - 48) and 148 (100 + 48). The curve would slope downward symmetrically as it moves away from the center, tapering off near the horizontal axis at the extremes.   Normal distribution curve for IQ scores ( , ).   A bell-shaped normal curve centered at 100, showing standard deviation intervals at 52, 68, 84, 116, 132, and 148.        The empirical rule   The empirical rule (or 68-95-99.7 rule) states that for any data set following a symmetrical, bell-shaped normal distribution, almost all data points lie within three standard deviations of the mean:     Approximately 68% of the data points fall within one standard deviation of the mean.    Approximately 95% of the data points fall within two standard deviations of the mean.    Approximately 99.7% of the data points fall within three standard deviations of the mean.        The 68-95-99.7 empirical rule for a normal distribution.   A symmetrical normal distribution curve with three horizontal brackets underneath showing percentages. The innermost bracket spans from minus 1 to plus 1 standard deviations and is labeled 68 percent. The middle bracket spans from minus 2 to plus 2 standard deviations and is labeled 95 percent. The outermost bracket spans from minus 3 to plus 3 standard deviations and is labeled 99.7 percent.     This graphic provides a concise summary of the vital statistics of a normal distribution. Because the graph resembles a bell, the normal distribution is also widely known as a bell curve. It possesses unique, predictable probability properties:    Exactly 50% of the data lies above the mean, and 50% lies below it.    Approximately 68% of the data occurs within standard deviation of the mean.    Approximately 95% of the data occurs within standard deviations of the mean.    Approximately 99.7% of the data occurs within standard deviations of the mean.    Because of these distinct probability ranges, the empirical rule is also frequently called the 68-95-99.7 rule.   Applying the Empirical Rule to IQ Scores   Return to the distribution of IQ scores from . Recall that IQ scores follow a normal distribution with a mean of 100 and a standard deviation of 16 (see ).     According to the Empirical Rule, approximately what percentage of people have IQ scores between 68 and 132?    According to the Empirical Rule, approximately 99.7% of people have IQ scores between what two values?    According to the Empirical Rule, approximately what percentage of people have an IQ score greater than 116?    According to the Empirical Rule, approximately what percentage of people have an IQ score less than 68?       The Empirical Rule (or 68-95-99.7 Rule) states that for a normally distributed dataset, approximately 68% of the data falls within 1 standard deviation of the mean, 95% falls within 2 standard deviations, and 99.7% falls within 3 standard deviations. Given and :     The scores and represent exactly two standard deviations below and above the mean, respectively: According to the Empirical Rule, approximately 95% of people have IQ scores within this range.    The rule states that 99.7% of data falls within 3 standard deviations of the mean ( ): Therefore, 99.7% of people have IQ scores between 52 and 148 .    An IQ score of 116 is exactly 1 standard deviation above the mean ( ). Since 68% of people fall within 1 standard deviation ( to ), the remaining 32% are split equally between both outer tails. Thus, approximately 16% of people have an IQ score greater than 116.    A score of 68 is exactly 2 standard deviations below the mean. Since 95% of people fall within 2 standard deviations ( to ), the remaining 5% are distributed evenly across the outer left and right tails. Thus, approximately 2.5% of people have an IQ score less than 68.        Human Height Distribution   Human height is commonly considered an approximately normally distributed measure. If the mean height of adult males in the United States is 5' 10\", with a standard deviation of 1.5\", how common are men with heights greater than 6' 1\"?    Since the mean is 5' 10\" and the standard deviation is 1.5\", a height of 6' 1\" is exactly 3 inches above the mean. This places it exactly standard deviations above the average.   Normal distribution curve for U.S. adult male height ( , ).   A bell-shaped normal curve centered at 70 inches (5 foot 10), showing standard deviation intervals from 65.5 to 74.5 inches.     Since the mean is 5' 10\" (70\") and the standard deviation is 1.5\", a height of 6' 1\" (73\") is exactly 3 inches above the mean. This places it exactly standard deviations above the average.  According to the empirical rule, about 95% of data falls within standard deviations of the mean, meaning 5% falls outside this range. Because the distribution is symmetrical, half of that remaining amount (2.5%) sits in the upper tail. Therefore, only about 2.5% of men are taller than 6' 1\", making them quite rare in this population.     High School High Jumpers   If the maximum jumping height of US high school high jumpers is normally distributed with a mean of 5' 11.5\" and a standard deviation of 2.2\", how unusual is it to see a high school jumper clear 6' 3.9\"?    If the mean is 5' 11.5\", then standard deviation above the mean is 6' 1.7\" and standard deviations above the mean is 6' 3.9\".  According to the empirical rule, 95% of all jumpers max out within standard deviations of the mean. This leaves 5% split equally between the extremely low and extremely high ends. This means that less than 2.5% of jumpers clear 6' 3.9\", making it very unusual to see a competitor exceed this height.     Yard Snow Depth Distribution   Suppose the depth of the snow in a yard is normally distributed with a mean of inches and a standard deviation of inches. What is the probability that a randomly chosen location in the yard has a snow depth between and inches?    First, find how many standard deviations the given depths sit away from the center. A depth of inches is exactly one standard deviation below the mean ( ). A depth of inches is exactly one standard deviation above the mean ( ).  According to the empirical rule, approximately 68% of the data in a normal distribution falls within one standard deviation of the mean. Therefore, the probability that a randomly chosen location has a snow depth between and inches is approximately 68% (or ).    "
},
{
  "id": "def-bell-curve",
  "level": "2",
  "url": "notes-empirical-rule.html#def-bell-curve",
  "type": "Definition",
  "number": "4.69",
  "title": "Bell-Curve.",
  "body": " Bell-Curve    A bell curve is used in statistics to represent the continuous probability distribution of a naturally occurring variable. It is perfectly symmetrical, showing that data near the mean occurs more frequently than data far from the mean.   "
},
{
  "id": "ex-exam-scores-bell-curve",
  "level": "2",
  "url": "notes-empirical-rule.html#ex-exam-scores-bell-curve",
  "type": "Example",
  "number": "4.70",
  "title": "",
  "body": "  An instructor plots final exam grades and notes they follow a normal distribution with a mean score of . Describe how the shape of this curve changes if you look at scores moving away from 75 in either direction.   Symmetrical distribution curve centered around a population mean.   A symmetrical, bell-shaped probability density curve tracking exam scores. The horizontal axis represents exam scores from 40 to 110. The peak of the smooth cyan curve sits directly above the mean score of 75, marked by a vertical dashed red line. The curve slopes downward symmetrically as it moves left toward 45 or right toward 105, tapering off cleanly near the horizontal axis at the extremes.       The highest point of the curve sits directly above the mean score of 75. As you move outward toward lower scores (left) or higher scores (right) standard deviations 15 away from the mean, the curve slopes downward symmetrically. The frequency of scores decreases as you move further from the mean, flattening out as it approaches the extremes of 45 and 105 where very few students scored.   "
},
{
  "id": "notes-empirical-rule-5",
  "level": "2",
  "url": "notes-empirical-rule.html#notes-empirical-rule-5",
  "type": "Checkpoint",
  "number": "4.72",
  "title": "",
  "body": "  If a dataset of adult heights perfectly matches a bell curve layout, what percentage of the population profile falls below the exact center peak value of the distribution?    Because a true normal distribution curve is perfectly symmetrical, the center peak represents both the mean and the median. Therefore, exactly of the population data falls below this center peak line.   Symmetrical normal distribution curve with the lower half shaded.   A symmetrical bell curve where the entire left half of the area under the curve—from the far left up to the center peak—is shaded in light blue, visually representing exactly 50 percent of the total distribution population.      "
},
{
  "id": "def-normal-distribution",
  "level": "2",
  "url": "notes-empirical-rule.html#def-normal-distribution",
  "type": "Definition",
  "number": "4.74",
  "title": "Normal Distribution.",
  "body": " Normal Distribution   A normal distribution is a symmetrical, bell-shaped probability distribution where the mean, median, and mode are all equal.   "
},
{
  "id": "example-iq-normal-curve",
  "level": "2",
  "url": "notes-empirical-rule.html#example-iq-normal-curve",
  "type": "Example",
  "number": "4.75",
  "title": "Normal Distribution to IQ Scores.",
  "body": " Normal Distribution to IQ Scores   IQ scores follow a normal distribution with a mean of 100 and a standard deviation of 16. Sketch the normal curve for this example and be sure to denote one, two, and three standard deviations from the mean.    The normal curve for IQ scores would be centered at 100, with the highest point of the bell curve directly above this mean. One standard deviation from the mean would be at 84 (100 - 16) and 116 (100 + 16). Two standard deviations from the mean would be at 68 (100 - 32) and 132 (100 + 32). Three standard deviations from the mean would be at 52 (100 - 48) and 148 (100 + 48). The curve would slope downward symmetrically as it moves away from the center, tapering off near the horizontal axis at the extremes.   Normal distribution curve for IQ scores ( , ).   A bell-shaped normal curve centered at 100, showing standard deviation intervals at 52, 68, 84, 116, 132, and 148.      "
},
{
  "id": "def-empirical-rule",
  "level": "2",
  "url": "notes-empirical-rule.html#def-empirical-rule",
  "type": "Definition",
  "number": "4.77",
  "title": "The empirical rule.",
  "body": " The empirical rule   The empirical rule (or 68-95-99.7 rule) states that for any data set following a symmetrical, bell-shaped normal distribution, almost all data points lie within three standard deviations of the mean:     Approximately 68% of the data points fall within one standard deviation of the mean.    Approximately 95% of the data points fall within two standard deviations of the mean.    Approximately 99.7% of the data points fall within three standard deviations of the mean.      "
},
{
  "id": "fig-empirical-rule",
  "level": "2",
  "url": "notes-empirical-rule.html#fig-empirical-rule",
  "type": "Figure",
  "number": "4.78",
  "title": "",
  "body": " The 68-95-99.7 empirical rule for a normal distribution.   A symmetrical normal distribution curve with three horizontal brackets underneath showing percentages. The innermost bracket spans from minus 1 to plus 1 standard deviations and is labeled 68 percent. The middle bracket spans from minus 2 to plus 2 standard deviations and is labeled 95 percent. The outermost bracket spans from minus 3 to plus 3 standard deviations and is labeled 99.7 percent.    "
},
{
  "id": "example-iq-empirical-rule",
  "level": "2",
  "url": "notes-empirical-rule.html#example-iq-empirical-rule",
  "type": "Example",
  "number": "4.79",
  "title": "Applying the Empirical Rule to IQ Scores.",
  "body": " Applying the Empirical Rule to IQ Scores   Return to the distribution of IQ scores from . Recall that IQ scores follow a normal distribution with a mean of 100 and a standard deviation of 16 (see ).     According to the Empirical Rule, approximately what percentage of people have IQ scores between 68 and 132?    According to the Empirical Rule, approximately 99.7% of people have IQ scores between what two values?    According to the Empirical Rule, approximately what percentage of people have an IQ score greater than 116?    According to the Empirical Rule, approximately what percentage of people have an IQ score less than 68?       The Empirical Rule (or 68-95-99.7 Rule) states that for a normally distributed dataset, approximately 68% of the data falls within 1 standard deviation of the mean, 95% falls within 2 standard deviations, and 99.7% falls within 3 standard deviations. Given and :     The scores and represent exactly two standard deviations below and above the mean, respectively: According to the Empirical Rule, approximately 95% of people have IQ scores within this range.    The rule states that 99.7% of data falls within 3 standard deviations of the mean ( ): Therefore, 99.7% of people have IQ scores between 52 and 148 .    An IQ score of 116 is exactly 1 standard deviation above the mean ( ). Since 68% of people fall within 1 standard deviation ( to ), the remaining 32% are split equally between both outer tails. Thus, approximately 16% of people have an IQ score greater than 116.    A score of 68 is exactly 2 standard deviations below the mean. Since 95% of people fall within 2 standard deviations ( to ), the remaining 5% are distributed evenly across the outer left and right tails. Thus, approximately 2.5% of people have an IQ score less than 68.      "
},
{
  "id": "exam-height-distribution",
  "level": "2",
  "url": "notes-empirical-rule.html#exam-height-distribution",
  "type": "Example",
  "number": "4.80",
  "title": "Human Height Distribution.",
  "body": " Human Height Distribution   Human height is commonly considered an approximately normally distributed measure. If the mean height of adult males in the United States is 5' 10\", with a standard deviation of 1.5\", how common are men with heights greater than 6' 1\"?    Since the mean is 5' 10\" and the standard deviation is 1.5\", a height of 6' 1\" is exactly 3 inches above the mean. This places it exactly standard deviations above the average.   Normal distribution curve for U.S. adult male height ( , ).   A bell-shaped normal curve centered at 70 inches (5 foot 10), showing standard deviation intervals from 65.5 to 74.5 inches.     Since the mean is 5' 10\" (70\") and the standard deviation is 1.5\", a height of 6' 1\" (73\") is exactly 3 inches above the mean. This places it exactly standard deviations above the average.  According to the empirical rule, about 95% of data falls within standard deviations of the mean, meaning 5% falls outside this range. Because the distribution is symmetrical, half of that remaining amount (2.5%) sits in the upper tail. Therefore, only about 2.5% of men are taller than 6' 1\", making them quite rare in this population.   "
},
{
  "id": "exercise-high-jump-distribution",
  "level": "2",
  "url": "notes-empirical-rule.html#exercise-high-jump-distribution",
  "type": "Checkpoint",
  "number": "4.82",
  "title": "High School High Jumpers.",
  "body": " High School High Jumpers   If the maximum jumping height of US high school high jumpers is normally distributed with a mean of 5' 11.5\" and a standard deviation of 2.2\", how unusual is it to see a high school jumper clear 6' 3.9\"?    If the mean is 5' 11.5\", then standard deviation above the mean is 6' 1.7\" and standard deviations above the mean is 6' 3.9\".  According to the empirical rule, 95% of all jumpers max out within standard deviations of the mean. This leaves 5% split equally between the extremely low and extremely high ends. This means that less than 2.5% of jumpers clear 6' 3.9\", making it very unusual to see a competitor exceed this height.   "
},
{
  "id": "exercise-snow-depth-distribution",
  "level": "2",
  "url": "notes-empirical-rule.html#exercise-snow-depth-distribution",
  "type": "Checkpoint",
  "number": "4.83",
  "title": "Yard Snow Depth Distribution.",
  "body": " Yard Snow Depth Distribution   Suppose the depth of the snow in a yard is normally distributed with a mean of inches and a standard deviation of inches. What is the probability that a randomly chosen location in the yard has a snow depth between and inches?    First, find how many standard deviations the given depths sit away from the center. A depth of inches is exactly one standard deviation below the mean ( ). A depth of inches is exactly one standard deviation above the mean ( ).  According to the empirical rule, approximately 68% of the data in a normal distribution falls within one standard deviation of the mean. Therefore, the probability that a randomly chosen location has a snow depth between and inches is approximately 68% (or ).   "
},
{
  "id": "sec-z-scores",
  "level": "1",
  "url": "sec-z-scores.html",
  "type": "Section",
  "number": "",
  "title": "4.4 Z-Scores",
  "body": " 4.4 Z-Scores   We will learn how z-scores can be used to evaluate how extreme a given value is within a particular set or population. By connecting these standard values to probability density distributions, you will develop the skills necessary to calculate the probability of a data point falling between two specified z-scores, as well as the ability to work backward to determine an exact z-score when given a target probability threshold.  Using the Empirical Rule can give you a good idea of the probability of occurrence of a value that happens to be exactly one, two, or three standard deviations to either side of the mean. But how do you compare the probabilities of values that are in between those standard deviations?  Z-scores are closely related to the Empirical Rule; both offer methods for evaluating how extreme a particular value is within a given dataset. You can think of a z-score as the exact number of standard deviations there are between a given value and the mean of the set. While the Empirical Rule only allows you to associate the first three integer standard deviations with fixed percentages ( , , and ), the z-score allows you to state, with arbitrary precision, exactly how many standard deviations a value lies above or below the mean.  Conceptually, the calculation is straightforward. To find the number of standard deviations between a value and the mean, first calculate the difference between your specific data point and the population mean. Then, divide that difference by the standard deviation of the dataset.    Z-Score Formula   The mathematical formula to calculate a standard z-score is:     For example, with mean and standard deviation , a score of gives: This means the value is 2 standard deviations below the mean.   Positive Z-score   Let mean and standard deviation . Find the z-score for . The value is standard deviations above the mean.     Negative Z-score   Let mean and standard deviation . Find the z-score for . The resulting value is approximately standard deviations below the mean.     Finding a Value Given a Z-score   Find the original raw data value if the mean is , the standard deviation is , and the given z-score is . Multiplying both sides by and adding yields:       Which monthly utility bill is better with respect to relative standing?  A monthly utility bill of with a mean of and a standard deviation of .  A monthly utility bill of with a mean of and a standard deviation of .  Both distributions are approximately bell-shaped and symmetric.    To evaluate relative standing for financial costs, we calculate the -score for each scenario. Because utility bills represent an expense, a more negative -score is preferable as it indicates a cost further below the group average.  For the first utility bill: This indicates the cost is exactly standard deviation below its baseline mean.  For the second utility bill: This indicates the cost is an exceptional standard deviations below its baseline mean.  Comparing the two relative standing positions, . Therefore, the utility bill is significantly better with respect to relative standing.      A student scores on an arithmetic test and on a vocabulary test. The scores for both tests are normally distributed.  The arithmetic test has a mean of and a standard deviation of .  The vocabulary test has a mean of and a standard deviation of .  On which test did the student have the better score relative to the class?    To compare academic performances across distributions with different spreads, we calculate the -score for each exam. A larger positive value indicates a score further above the classroom average.  For the arithmetic test: This indicates the student scored standard deviations above the arithmetic class mean.  For the vocabulary test: This indicates the student scored an exceptional standard deviations above the vocabulary class mean.  Comparing the two positions of relative standing, . Therefore, the student performed significantly better on the vocabulary test relative to the class.     Practice Exercises    A retail store calculates that the mean price for a specific model of skis is mean with a standard deviation of . Find the z-score for a pair of skis priced at .     The price is exactly standard deviations below the mean.      The mean number of ice cream scoops served per order at a shop is scoops with a standard deviation of scoop. Find the z-score for an order containing scoops.     The order size is standard deviations above the mean.      The mean weight of a specific cattle breed population is mean lbs with a standard deviation of lbs. Calculate the z-score for a cow that weighs lbs.     The cow's weight is approximately standard deviations below the mean.      Compute the z-score for a sample measurement of taken from a population where mean and standard deviation .          "
},
{
  "id": "def-z-score-formula",
  "level": "2",
  "url": "sec-z-scores.html#def-z-score-formula",
  "type": "Definition",
  "number": "4.84",
  "title": "Z-Score Formula.",
  "body": " Z-Score Formula   The mathematical formula to calculate a standard z-score is:    "
},
{
  "id": "ex-pos-z",
  "level": "2",
  "url": "sec-z-scores.html#ex-pos-z",
  "type": "Example",
  "number": "4.85",
  "title": "Positive Z-score.",
  "body": " Positive Z-score   Let mean and standard deviation . Find the z-score for . The value is standard deviations above the mean.   "
},
{
  "id": "ex-neg-z",
  "level": "2",
  "url": "sec-z-scores.html#ex-neg-z",
  "type": "Example",
  "number": "4.86",
  "title": "Negative Z-score.",
  "body": " Negative Z-score   Let mean and standard deviation . Find the z-score for . The resulting value is approximately standard deviations below the mean.   "
},
{
  "id": "ex-reverse-z",
  "level": "2",
  "url": "sec-z-scores.html#ex-reverse-z",
  "type": "Example",
  "number": "4.87",
  "title": "Finding a Value Given a Z-score.",
  "body": " Finding a Value Given a Z-score   Find the original raw data value if the mean is , the standard deviation is , and the given z-score is . Multiplying both sides by and adding yields:    "
},
{
  "id": "example-utility-bill-zscore",
  "level": "2",
  "url": "sec-z-scores.html#example-utility-bill-zscore",
  "type": "Example",
  "number": "4.88",
  "title": "",
  "body": "  Which monthly utility bill is better with respect to relative standing?  A monthly utility bill of with a mean of and a standard deviation of .  A monthly utility bill of with a mean of and a standard deviation of .  Both distributions are approximately bell-shaped and symmetric.    To evaluate relative standing for financial costs, we calculate the -score for each scenario. Because utility bills represent an expense, a more negative -score is preferable as it indicates a cost further below the group average.  For the first utility bill: This indicates the cost is exactly standard deviation below its baseline mean.  For the second utility bill: This indicates the cost is an exceptional standard deviations below its baseline mean.  Comparing the two relative standing positions, . Therefore, the utility bill is significantly better with respect to relative standing.   "
},
{
  "id": "exercise-test-scores-zscore",
  "level": "2",
  "url": "sec-z-scores.html#exercise-test-scores-zscore",
  "type": "Checkpoint",
  "number": "4.89",
  "title": "",
  "body": "  A student scores on an arithmetic test and on a vocabulary test. The scores for both tests are normally distributed.  The arithmetic test has a mean of and a standard deviation of .  The vocabulary test has a mean of and a standard deviation of .  On which test did the student have the better score relative to the class?    To compare academic performances across distributions with different spreads, we calculate the -score for each exam. A larger positive value indicates a score further above the classroom average.  For the arithmetic test: This indicates the student scored standard deviations above the arithmetic class mean.  For the vocabulary test: This indicates the student scored an exceptional standard deviations above the vocabulary class mean.  Comparing the two positions of relative standing, . Therefore, the student performed significantly better on the vocabulary test relative to the class.   "
},
{
  "id": "exercises-z-scores-2",
  "level": "2",
  "url": "sec-z-scores.html#exercises-z-scores-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  A retail store calculates that the mean price for a specific model of skis is mean with a standard deviation of . Find the z-score for a pair of skis priced at .     The price is exactly standard deviations below the mean.   "
},
{
  "id": "exercises-z-scores-3",
  "level": "2",
  "url": "sec-z-scores.html#exercises-z-scores-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  The mean number of ice cream scoops served per order at a shop is scoops with a standard deviation of scoop. Find the z-score for an order containing scoops.     The order size is standard deviations above the mean.   "
},
{
  "id": "exercises-z-scores-4",
  "level": "2",
  "url": "sec-z-scores.html#exercises-z-scores-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  The mean weight of a specific cattle breed population is mean lbs with a standard deviation of lbs. Calculate the z-score for a cow that weighs lbs.     The cow's weight is approximately standard deviations below the mean.   "
},
{
  "id": "exercises-z-scores-5",
  "level": "2",
  "url": "sec-z-scores.html#exercises-z-scores-5",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Compute the z-score for a sample measurement of taken from a population where mean and standard deviation .        "
},
{
  "id": "sec-Regression",
  "level": "1",
  "url": "sec-Regression.html",
  "type": "Section",
  "number": "",
  "title": "4.5 Scatter Plots and Regression Lines",
  "body": " 4.5 Scatter Plots and Regression Lines   When two data items are collected for every person or object in a sample, the data items can be visually displayed using a scatter plot.    Scatter Plot   A scatter plot is a type of plot that displays the relationship between two numerical variables. Each point on the plot represents a single observation, with its position determined by the values of the two variables.      Consider the relationship between the number of hours studied and the test scores of students. A scatter plot would display each student as a point, with the x-axis representing hours studied and the y-axis representing test scores.   Student Study Hours versus Test Scores    Student  Hours Studied ( )  Test Score ( )   A 1.5 65  B 2.0 72  C 3.5 80  D 4.0 78  E 5.5 88  F 6.0 95  G 6.5 90  H 7.0 98        Scatter Plot of Student Study Hours versus Test Scores   A scatter plot showing a positive linear relationship between study hours on the horizontal axis and test scores on the vertical axis.     By plotting the data points on a scatter plot, we can visually inspect the relationship between the two variables. The resulting chart displays a clear upward trend from left to right, showing a positive linear association.      Make a scatter plot for the given data provided in . Use the scatter plot to describe whether or not the variables appear to be related.   Dataset of Variables and    Observation  Variable  Variable   1 1 12  2 2 18  3 3 22  4 4 35  5 5 31  6 6 48  7 7 52      Scatter plot modeling the relationship between variables and .   A scatter plot on a grid where points consistently rise from left to right as variable x increases from 1 to 7. Each point is labeled with its corresponding observation number from 1 to 7.       By examining the scatter plot in , we can visually interpret the relationship between the two variables.  As we look from left to right along the horizontal axis, the data points show a clear upward pattern. This tells us that as variable increases, variable generally increases as well. Because the points follow a relatively straight, rising path, the variables appear to have a strong, positive linear correlation .     A scatter plot can be used to determine whether two quantities are related. If there is a clear relationship, the quantities are said to be correlated . Correlations can often be seen when data items are displayed on a scatter plot. Although the scatter plot in indicates a correlation between education and prejudice, we cannot conclude that increased education causes a person's level of prejudice to decrease.    Correlation Coefficient    correlation coefficient : A measure used to describe the strength and direction of a relationship between variables whose data points lie on or near a line is called the correlation coefficient, designated by . A correlation coefficient, , is a number between -1 and 1, inclusive.     Classifying Correlation Types and Strengths   The linear correlation coefficient ( ) details both the direction (positive or negative) and strength (perfect, strong, weak, or zero) of the linear relationship between two variables. Match each of the following real-world study results with its correct statistical description:    A study on employee training hours and production errors yields .  An analysis of weekly grocery spending and family hair length yields .  A dataset comparing daily steps taken and body fat percentage yields .  An observation of local temperature and outdoor swimming pool attendance yields .  A report correlating a person's age with their vocabulary size yields .      Here is the correct classification for each scenario using standard interpretation boundaries for the correlation coefficient:      Scenario 1 ( ): Strong Negative Correlation. The value is negative, meaning errors drop as training increases. Because is close to , the data points form a tightly clustered downward trend line.     Scenario 2 ( ): No Correlation. The value is approximately . Changes in grocery spending show a completely random distribution when plotted against hair length, indicating no linear link.     Scenario 3 ( ): Weak Negative Correlation. The negative sign shows an inverse direction (more steps link to lower body fat). However, being close to means the data forms a highly dispersed, scattered downward cloud.     Scenario 4 ( ): Strong Positive Correlation. The positive sign indicates both variables rise together. The high value shows the data pairs cluster tightly along an upward-sloping trend line.     Scenario 5 ( ): Weak Positive Correlation. The relationship is positive (older age links to larger vocabulary), but the low decimal value indicates a loosely scattered upward trend with significant variance.       Grid Visualization of the Five Correlation Profiles   A multi-panel layout showing strong positive, weak positive, no correlation, weak negative, and strong negative scatter plots side by side.        Stress and Illness Analysis   In a 1971 study involving subjects, researchers found a relationship between the subjects' level of stress and how often they became ill. The correlation coefficient in this study was . What does this indicate about the relationship between stress and illness?  Stress and illness have a and relationship.     strong; positive   Incorrect. An r-value of 0.22 is much closer to 0 than to 1, indicating a relationship that is not strong.     weak; positive   Correct! The value is positive (above 0), meaning higher stress relates to more frequent illness. The value is weak (close to 0.00), meaning the trend has significant variation.     weak; negative   Incorrect. A negative correlation would require an r-value below zero (e.g., -0.22), which would imply that more stress leads to less illness.     strong; negative   Incorrect. The value is neither negative nor large enough to indicate a strong linear bond.      The value provides two key pieces of information about the linear trend:      Direction: The value is positive ( ). This means the two variables move in the same direction: as a person's recorded stress levels increase, their frequency of falling ill also tends to increase.     Strength: The absolute value is low ( ). This means that while a pattern exists, the data points are highly scattered around a line of best fit, making it a weak predictable link.     Therefore, stress and illness have a weak and positive relationship.   Conceptual Visualization of r = 0.22   A scatter plot displaying a highly dispersed, loosely upward-sloping cloud of data points representing a weak positive correlation.        Real-World Analysis: Literacy and Child Mortality   The scatter plot below shows the relationship between the percentage of adult females in a country who are literate ( ) and the mortality rate of children under five per thousand ( ), alongside its linear regression line.    Scatter Plot of Female Literacy vs. Under-Five Mortality   A scatter plot showing a clear downward trend where under-five child mortality decreases as the percentage of adult female literacy increases.     Use the provided chart to determine whether each of the following statements is True or False :  There is a perfect negative correlation between the percentage of adult females who are literate and under-five mortality.  As the percentage of adult females who are literate increases, under-five mortality tends to decrease.  There is no correlation between the percentage of adult females who are literate and under-five mortality.      By evaluating the direction and spatial dispersion of the data clusters on the graph, we find the following solutions:      Statement 1 is False. A perfect negative correlation ( ) requires every observed country node to land exactly on the blue trajectory pathway line. Because data nodes are spread out in a loose cloud formation above and below the trendline, the pairing represents a strong, imperfect negative correlation.     Statement 2 is True. The simple linear regression model features a distinct downward slope tracking from left to right. This confirms that as female literacy coordinates increase along the horizontal axis, the corresponding under-five mortality index shows a consistent, predictable decline.     Statement 3 is False. A condition of no correlation ( ) generates a completely unstructured cloud of circular nodes accompanied by a flat, zero-slope horizontal regression bar. This graph shows a clear linear pattern, proving a strong statistical relationship between the two metrics.        Simple Linear Regression   Simple linear regression is a statistical method that models the relationship between a single independent variable and a continuous dependent variable by fitting a linear equation to observed data. It plots a straight line of best fit. The equation of the line is typically expressed as a linear function of the form , where represents the slope of the line and represents the y-intercept.     A linear model calculated from the dataset below yields a slope of 0.25 and a y-intercept of 8.25. The table details the relationship between the number of widgets in a package and the total length of the package, measured in inches.   Widget Packaging Dimensions    Number of Widgets ( )  Length of Package in. ( )    3  9.00    4  9.25    5  9.50    6  9.75        Form the equation of the regression line and interpret the slope and y-intercept in the context of the problem.    Using the regression line, predict the length of a package that contains 7 widgets.          Using the slope ( ) and the _-intercept ( ), the simple linear regression equation is:    Interpretation of the Slope: For each additional widget added to the package ( ), the total length of the package increases by exactly 0.25 inches .   Interpretation of the y-Intercept: When there are zero widgets in the package ( ), the baseline length of the packaging material itself is 8.25 inches .    To predict the total packaging length for a shipment containing widgets, substitute into our linear regression model: A package holding 7 widgets is predicted to be exactly 10.00 inches long.       Linear Regression Trend for Widget Packaging   A scatter plot displaying four blue data points aligned upward on a Cartesian coordinate plane. The horizontal axis represents the Number of Widgets from 2 to 7, and the vertical axis represents the Length of the Package in inches from 8 to 11. The four data points are located at coordinates (3, 9.00), (4, 9.25), (5, 9.50), and (6, 9.75). A solid red regression line trends upward through all four points, crossing the vertical axis at a y-intercept value of 8.25, demonstrating a positive linear correlation described by the equation y equals 0.25x plus 8.25.         A linear model calculated from a dataset yields a slope of 13.3 and a y-intercept of 142.6 when modeling the relationship between total fat grams ( ) and total calories ( ) in a selection of fast food sandwiches.     Form the linear regression equation that models this data, rounding all baseline parameters to the nearest integer, and interpret the slope and y-intercept in the context of the problem.    Using the regression model, predict the total number of calories in a menu item that contains 25 grams of fat. Round your final prediction to the nearest whole integer.      Fast Food Sandwich Nutritional Data      Total Fat g ( )  Total Calories ( )   9 260  13 320  21 420  30 530  31 560  32 580  34 590         Rounding the y-intercept ( ) and the slope ( ), the linear regression equation is:    Slope Interpretation: For each additional 1 gram of fat in a sandwich, the energy content is predicted to increase by approximately 13 calories .   y-Intercept Interpretation: If a sandwich contains 0 grams of fat, its predicted baseline energy value from non-fat ingredients is 143 calories .    Substitute into the unrounded regression line equation to find the precise calorie projection: An item with 25 grams of fat is estimated to contain 475 calories .      Linear Fit of Fat Content to Total Calories   A scatter plot tracking sandwich fat content versus total calories on a Cartesian grid. The horizontal x-axis measures Total Fat from 0 to 40 grams, and the vertical y-axis measures Total Calories from 200 to 700. Seven data points align in an upward trajectory. A straight red trendline originates at a y-intercept of 143 and climbs with a slope of 13, showing a strong positive correlation.         During a solar eclipse, the temperature begins to drop as the Moon comes between the Earth and the Sun. The cooling temperatures, up through totality, of the eclipse are shown in the table below. Using a linear regression equation with the slope -4.4 and y-intercept 75.1, predict the temperature at the 4 minute mark during the cooling, to the nearest degree.   Eclipse Temperature Drop      Time minutes ( )  Temp. F ( )   0 75  1 71  2 66  3 62  4 ?    Select the predicted temperature at the 4 minute mark.     Step 1: Calculate the Regression Equation  .   Step 2: Evaluate at 4 Minutes Substitute directly into our regression model to find the expected cooling value: Rounding to the nearest whole integer gives our target choice of 58 .    Linear Regression Line for Eclipse Cooling Pattern   A scatter plot displaying historical temperature drops during a solar eclipse on a coordinate plane. The horizontal axis represents elapsed time in minutes from negative 0.5 to 4.5. The vertical axis measures temperature in degrees Fahrenheit from 55 to 80. Four blue circular data points are plotted at coordinates (0, 75), (1, 71), (2, 66), and (3, 62). A solid red regression line passes downward through the points. A green 'X' mark highlights the target prediction location on the red line at coordinate point (4, 57.5), demonstrating an overall negative linear correlation.         A morning radio talk show is running a Winter Coat Campaign to collect and deliver coats to local shelters. They are storing the coats until they reach their goal of 2100 coats. The table below shows the number of coats in storage at the end of each day of the campaign.   Winter Coat Collection Progress      Day of Campaign ( )  Number of Coats Stored ( )   1 860  2 930  3 1000  4 1150  5 1200  6 1360    Find the linear regression equation with the slope 98.86 and y-intercept 737.33 rounded to the nearest hundredths, and predict the day the campaign will meet its goal.     Part a) Linear Regression Equation: Thus, the linear modeling line of best fit is    Part b) Goal Prediction: To compute the target milestone, substitute into the verified equation: Because the data tracks totals at the end of each day, reaching means the campaign will successfully complete its goal on Day 14 .   Linear Path Tracking Coat Collection Goal Delivery   A scatter plot mapping the progress of a winter coat collection drive on a Cartesian grid. The horizontal axis outlines the Day of the Campaign from 0 to 15, and the vertical axis measures the Number of Coats Stored from 600 to 2300. Six blue data markers crawl steadily upward from day 1 to day 6. A solid red trendline launches from a y-intercept of 737.33 and scales upward, crossing a dotted horizontal threshold lines at y equals 2100 on Day 14, where a green X marks the goal resolution.       "
},
{
  "id": "def-Scatter-plot",
  "level": "2",
  "url": "sec-Regression.html#def-Scatter-plot",
  "type": "Definition",
  "number": "4.90",
  "title": "Scatter Plot.",
  "body": " Scatter Plot   A scatter plot is a type of plot that displays the relationship between two numerical variables. Each point on the plot represents a single observation, with its position determined by the values of the two variables.   "
},
{
  "id": "example-scatter-plot",
  "level": "2",
  "url": "sec-Regression.html#example-scatter-plot",
  "type": "Example",
  "number": "4.91",
  "title": "",
  "body": "  Consider the relationship between the number of hours studied and the test scores of students. A scatter plot would display each student as a point, with the x-axis representing hours studied and the y-axis representing test scores.   Student Study Hours versus Test Scores    Student  Hours Studied ( )  Test Score ( )   A 1.5 65  B 2.0 72  C 3.5 80  D 4.0 78  E 5.5 88  F 6.0 95  G 6.5 90  H 7.0 98        Scatter Plot of Student Study Hours versus Test Scores   A scatter plot showing a positive linear relationship between study hours on the horizontal axis and test scores on the vertical axis.     By plotting the data points on a scatter plot, we can visually inspect the relationship between the two variables. The resulting chart displays a clear upward trend from left to right, showing a positive linear association.   "
},
{
  "id": "exercise-generic-scatter-plot",
  "level": "2",
  "url": "sec-Regression.html#exercise-generic-scatter-plot",
  "type": "Checkpoint",
  "number": "4.94",
  "title": "",
  "body": "  Make a scatter plot for the given data provided in . Use the scatter plot to describe whether or not the variables appear to be related.   Dataset of Variables and    Observation  Variable  Variable   1 1 12  2 2 18  3 3 22  4 4 35  5 5 31  6 6 48  7 7 52      Scatter plot modeling the relationship between variables and .   A scatter plot on a grid where points consistently rise from left to right as variable x increases from 1 to 7. Each point is labeled with its corresponding observation number from 1 to 7.       By examining the scatter plot in , we can visually interpret the relationship between the two variables.  As we look from left to right along the horizontal axis, the data points show a clear upward pattern. This tells us that as variable increases, variable generally increases as well. Because the points follow a relatively straight, rising path, the variables appear to have a strong, positive linear correlation .   "
},
{
  "id": "sec-Regression-6",
  "level": "2",
  "url": "sec-Regression.html#sec-Regression-6",
  "type": "Note",
  "number": "4.97",
  "title": "",
  "body": " A scatter plot can be used to determine whether two quantities are related. If there is a clear relationship, the quantities are said to be correlated . Correlations can often be seen when data items are displayed on a scatter plot. Although the scatter plot in indicates a correlation between education and prejudice, we cannot conclude that increased education causes a person's level of prejudice to decrease.  "
},
{
  "id": "def-Correlation-Coefficient",
  "level": "2",
  "url": "sec-Regression.html#def-Correlation-Coefficient",
  "type": "Definition",
  "number": "4.98",
  "title": "Correlation Coefficient.",
  "body": " Correlation Coefficient    correlation coefficient : A measure used to describe the strength and direction of a relationship between variables whose data points lie on or near a line is called the correlation coefficient, designated by . A correlation coefficient, , is a number between -1 and 1, inclusive.   "
},
{
  "id": "example-correlation-coefficient-scenarios",
  "level": "2",
  "url": "sec-Regression.html#example-correlation-coefficient-scenarios",
  "type": "Example",
  "number": "4.99",
  "title": "Classifying Correlation Types and Strengths.",
  "body": " Classifying Correlation Types and Strengths   The linear correlation coefficient ( ) details both the direction (positive or negative) and strength (perfect, strong, weak, or zero) of the linear relationship between two variables. Match each of the following real-world study results with its correct statistical description:    A study on employee training hours and production errors yields .  An analysis of weekly grocery spending and family hair length yields .  A dataset comparing daily steps taken and body fat percentage yields .  An observation of local temperature and outdoor swimming pool attendance yields .  A report correlating a person's age with their vocabulary size yields .      Here is the correct classification for each scenario using standard interpretation boundaries for the correlation coefficient:      Scenario 1 ( ): Strong Negative Correlation. The value is negative, meaning errors drop as training increases. Because is close to , the data points form a tightly clustered downward trend line.     Scenario 2 ( ): No Correlation. The value is approximately . Changes in grocery spending show a completely random distribution when plotted against hair length, indicating no linear link.     Scenario 3 ( ): Weak Negative Correlation. The negative sign shows an inverse direction (more steps link to lower body fat). However, being close to means the data forms a highly dispersed, scattered downward cloud.     Scenario 4 ( ): Strong Positive Correlation. The positive sign indicates both variables rise together. The high value shows the data pairs cluster tightly along an upward-sloping trend line.     Scenario 5 ( ): Weak Positive Correlation. The relationship is positive (older age links to larger vocabulary), but the low decimal value indicates a loosely scattered upward trend with significant variance.       Grid Visualization of the Five Correlation Profiles   A multi-panel layout showing strong positive, weak positive, no correlation, weak negative, and strong negative scatter plots side by side.      "
},
{
  "id": "example-stress-illness-correlation",
  "level": "2",
  "url": "sec-Regression.html#example-stress-illness-correlation",
  "type": "Example",
  "number": "4.101",
  "title": "Stress and Illness Analysis.",
  "body": " Stress and Illness Analysis   In a 1971 study involving subjects, researchers found a relationship between the subjects' level of stress and how often they became ill. The correlation coefficient in this study was . What does this indicate about the relationship between stress and illness?  Stress and illness have a and relationship.     strong; positive   Incorrect. An r-value of 0.22 is much closer to 0 than to 1, indicating a relationship that is not strong.     weak; positive   Correct! The value is positive (above 0), meaning higher stress relates to more frequent illness. The value is weak (close to 0.00), meaning the trend has significant variation.     weak; negative   Incorrect. A negative correlation would require an r-value below zero (e.g., -0.22), which would imply that more stress leads to less illness.     strong; negative   Incorrect. The value is neither negative nor large enough to indicate a strong linear bond.      The value provides two key pieces of information about the linear trend:      Direction: The value is positive ( ). This means the two variables move in the same direction: as a person's recorded stress levels increase, their frequency of falling ill also tends to increase.     Strength: The absolute value is low ( ). This means that while a pattern exists, the data points are highly scattered around a line of best fit, making it a weak predictable link.     Therefore, stress and illness have a weak and positive relationship.   Conceptual Visualization of r = 0.22   A scatter plot displaying a highly dispersed, loosely upward-sloping cloud of data points representing a weak positive correlation.      "
},
{
  "id": "example-literacy-child-mortality",
  "level": "2",
  "url": "sec-Regression.html#example-literacy-child-mortality",
  "type": "Example",
  "number": "4.103",
  "title": "Real-World Analysis: Literacy and Child Mortality.",
  "body": " Real-World Analysis: Literacy and Child Mortality   The scatter plot below shows the relationship between the percentage of adult females in a country who are literate ( ) and the mortality rate of children under five per thousand ( ), alongside its linear regression line.    Scatter Plot of Female Literacy vs. Under-Five Mortality   A scatter plot showing a clear downward trend where under-five child mortality decreases as the percentage of adult female literacy increases.     Use the provided chart to determine whether each of the following statements is True or False :  There is a perfect negative correlation between the percentage of adult females who are literate and under-five mortality.  As the percentage of adult females who are literate increases, under-five mortality tends to decrease.  There is no correlation between the percentage of adult females who are literate and under-five mortality.      By evaluating the direction and spatial dispersion of the data clusters on the graph, we find the following solutions:      Statement 1 is False. A perfect negative correlation ( ) requires every observed country node to land exactly on the blue trajectory pathway line. Because data nodes are spread out in a loose cloud formation above and below the trendline, the pairing represents a strong, imperfect negative correlation.     Statement 2 is True. The simple linear regression model features a distinct downward slope tracking from left to right. This confirms that as female literacy coordinates increase along the horizontal axis, the corresponding under-five mortality index shows a consistent, predictable decline.     Statement 3 is False. A condition of no correlation ( ) generates a completely unstructured cloud of circular nodes accompanied by a flat, zero-slope horizontal regression bar. This graph shows a clear linear pattern, proving a strong statistical relationship between the two metrics.      "
},
{
  "id": "example-widget-package",
  "level": "2",
  "url": "sec-Regression.html#example-widget-package",
  "type": "Example",
  "number": "4.105",
  "title": "",
  "body": "  A linear model calculated from the dataset below yields a slope of 0.25 and a y-intercept of 8.25. The table details the relationship between the number of widgets in a package and the total length of the package, measured in inches.   Widget Packaging Dimensions    Number of Widgets ( )  Length of Package in. ( )    3  9.00    4  9.25    5  9.50    6  9.75        Form the equation of the regression line and interpret the slope and y-intercept in the context of the problem.    Using the regression line, predict the length of a package that contains 7 widgets.          Using the slope ( ) and the _-intercept ( ), the simple linear regression equation is:    Interpretation of the Slope: For each additional widget added to the package ( ), the total length of the package increases by exactly 0.25 inches .   Interpretation of the y-Intercept: When there are zero widgets in the package ( ), the baseline length of the packaging material itself is 8.25 inches .    To predict the total packaging length for a shipment containing widgets, substitute into our linear regression model: A package holding 7 widgets is predicted to be exactly 10.00 inches long.       Linear Regression Trend for Widget Packaging   A scatter plot displaying four blue data points aligned upward on a Cartesian coordinate plane. The horizontal axis represents the Number of Widgets from 2 to 7, and the vertical axis represents the Length of the Package in inches from 8 to 11. The four data points are located at coordinates (3, 9.00), (4, 9.25), (5, 9.50), and (6, 9.75). A solid red regression line trends upward through all four points, crossing the vertical axis at a y-intercept value of 8.25, demonstrating a positive linear correlation described by the equation y equals 0.25x plus 8.25.      "
},
{
  "id": "example-fat-calories-regression",
  "level": "2",
  "url": "sec-Regression.html#example-fat-calories-regression",
  "type": "Example",
  "number": "4.108",
  "title": "",
  "body": "  A linear model calculated from a dataset yields a slope of 13.3 and a y-intercept of 142.6 when modeling the relationship between total fat grams ( ) and total calories ( ) in a selection of fast food sandwiches.     Form the linear regression equation that models this data, rounding all baseline parameters to the nearest integer, and interpret the slope and y-intercept in the context of the problem.    Using the regression model, predict the total number of calories in a menu item that contains 25 grams of fat. Round your final prediction to the nearest whole integer.      Fast Food Sandwich Nutritional Data      Total Fat g ( )  Total Calories ( )   9 260  13 320  21 420  30 530  31 560  32 580  34 590         Rounding the y-intercept ( ) and the slope ( ), the linear regression equation is:    Slope Interpretation: For each additional 1 gram of fat in a sandwich, the energy content is predicted to increase by approximately 13 calories .   y-Intercept Interpretation: If a sandwich contains 0 grams of fat, its predicted baseline energy value from non-fat ingredients is 143 calories .    Substitute into the unrounded regression line equation to find the precise calorie projection: An item with 25 grams of fat is estimated to contain 475 calories .      Linear Fit of Fat Content to Total Calories   A scatter plot tracking sandwich fat content versus total calories on a Cartesian grid. The horizontal x-axis measures Total Fat from 0 to 40 grams, and the vertical y-axis measures Total Calories from 200 to 700. Seven data points align in an upward trajectory. A straight red trendline originates at a y-intercept of 143 and climbs with a slope of 13, showing a strong positive correlation.      "
},
{
  "id": "exercise-eclipse-temperature",
  "level": "2",
  "url": "sec-Regression.html#exercise-eclipse-temperature",
  "type": "Checkpoint",
  "number": "4.111",
  "title": "",
  "body": "  During a solar eclipse, the temperature begins to drop as the Moon comes between the Earth and the Sun. The cooling temperatures, up through totality, of the eclipse are shown in the table below. Using a linear regression equation with the slope -4.4 and y-intercept 75.1, predict the temperature at the 4 minute mark during the cooling, to the nearest degree.   Eclipse Temperature Drop      Time minutes ( )  Temp. F ( )   0 75  1 71  2 66  3 62  4 ?    Select the predicted temperature at the 4 minute mark.     Step 1: Calculate the Regression Equation  .   Step 2: Evaluate at 4 Minutes Substitute directly into our regression model to find the expected cooling value: Rounding to the nearest whole integer gives our target choice of 58 .    Linear Regression Line for Eclipse Cooling Pattern   A scatter plot displaying historical temperature drops during a solar eclipse on a coordinate plane. The horizontal axis represents elapsed time in minutes from negative 0.5 to 4.5. The vertical axis measures temperature in degrees Fahrenheit from 55 to 80. Four blue circular data points are plotted at coordinates (0, 75), (1, 71), (2, 66), and (3, 62). A solid red regression line passes downward through the points. A green 'X' mark highlights the target prediction location on the red line at coordinate point (4, 57.5), demonstrating an overall negative linear correlation.      "
},
{
  "id": "exercise-coat-campaign",
  "level": "2",
  "url": "sec-Regression.html#exercise-coat-campaign",
  "type": "Checkpoint",
  "number": "4.114",
  "title": "",
  "body": "  A morning radio talk show is running a Winter Coat Campaign to collect and deliver coats to local shelters. They are storing the coats until they reach their goal of 2100 coats. The table below shows the number of coats in storage at the end of each day of the campaign.   Winter Coat Collection Progress      Day of Campaign ( )  Number of Coats Stored ( )   1 860  2 930  3 1000  4 1150  5 1200  6 1360    Find the linear regression equation with the slope 98.86 and y-intercept 737.33 rounded to the nearest hundredths, and predict the day the campaign will meet its goal.     Part a) Linear Regression Equation: Thus, the linear modeling line of best fit is    Part b) Goal Prediction: To compute the target milestone, substitute into the verified equation: Because the data tracks totals at the end of each day, reaching means the campaign will successfully complete its goal on Day 14 .   Linear Path Tracking Coat Collection Goal Delivery   A scatter plot mapping the progress of a winter coat collection drive on a Cartesian grid. The horizontal axis outlines the Day of the Campaign from 0 to 15, and the vertical axis measures the Number of Coats Stored from 600 to 2300. Six blue data markers crawl steadily upward from day 1 to day 6. A solid red trendline launches from a y-intercept of 737.33 and scales upward, crossing a dotted horizontal threshold lines at y equals 2100 on Day 14, where a green X marks the goal resolution.      "
},
{
  "id": "sec-stat-ch-ex",
  "level": "1",
  "url": "sec-stat-ch-ex.html",
  "type": "Section",
  "number": "",
  "title": "4.6 Chapter Exercises",
  "body": " 4.6 Chapter Exercises   Statistics Practice Problem     Find the mean, median, and mode for the following dataset:     To simplify the statistical calculations, we first arrange the dataset of values in ascending order:    1. Mean Calculation: The mean is calculated by summing all the values and dividing by the total number of data points ( ): Thus, the mean of the dataset is 30.25 .   2. Median Calculation: Since there is an even number of data points ( ), the median is found by taking the average of the two middle values (the 4th and 5th numbers in our ordered list, which are and ): Thus, the median of the dataset is 29.5 .   3. Mode Calculation: The mode is the value that appears most frequently in a dataset. Because every unique number in this list occurs exactly once, there is no mode .       Use the data 20, 24, 34, 38. Without actually computing the standard deviation, which of the following best approximates the standard deviation?      2    Incorrect. The data points span a total range of 18 units (from 20 to 38), so they sit much further than 2 units away from the center.      4    Incorrect. While 4 is a factor, the data points are spread out further from the mean of 29 than this value suggests.      8    Correct. The mean is 29. The data points sit 5 and 9 units away from this mean. An average distance of roughly 7-8 units is the most accurate estimate.      10    Incorrect. This value overestimates the standard deviation, as most points are closer to the mean than 10 units.        The rainfall in a small town is recorded daily for two weeks, in inches: What are the mean and the approximate sample standard deviation for this data set?     Step 1: Calculate the Mean. Sum all 14 data entries and divide by the count:    Step 2: Find individual distances. Find the absolute difference between each entry and the mean of . Summing these 14 positive distances gives .   Step 3: Average the distances. Divide the sum of distances by the number of values:    Step 4: Approximate Standard Deviation. Because the geometric process of squaring numbers shifts standard deviation upwards, the true standard deviation value will sit slightly higher than our baseline average distance. We can approximate the sample standard deviation to be just above 0.81 (approximately to ).       The heights of adult men in a certain city are normally distributed with a mean of 70 inches and a standard deviation ( ) of 3 inches. Use the Empirical Rule to answer the following questions:  What percentage of men are between 67 and 73 inches tall?  What percentage of men are between 61 and 79 inches tall?  What percentage of men are taller than 76 inches?      The Empirical Rule (also known as the 68-95-99.7 rule) states that for a perfectly normal distribution:  Approximately of the data falls within standard deviation of the mean ( ).  Approximately of the data falls within standard deviations of the mean ( ).  Approximately of the data falls within standard deviations of the mean ( ).    Given parameters: inches and Standard Deviation inches. Let us map out the standard deviation markers:  mean  mean  mean     Part a) Interval [67, 73]: These values correspond exactly to mean and mean . According to the rule, approximately 68% of the men fall within this height range.   Part b) Interval [61, 79]: These values correspond exactly to mean and mean . According to the rule, approximately 99.7% of the men fall within this height range.   Part c) Heights above 76 inches: A height of 76 inches corresponds exactly to mean . Since a normal curve is perfectly symmetrical, of the data falls above the mean of 70. The region between the mean (70) and 2 standard deviations above the mean (76) contains exactly half of the range, which is . To find the tail value remaining above 76: Thus, approximately 2.5% of men in the city are taller than 76 inches.    Normal Distribution of Heights with Empirical Rule Breakdowns   A symmetrical normal distribution bell curve plotted along a horizontal axis showing heights from 58 to 82 inches. The peak is centered perfectly at 70 inches. Dashed vertical lines demarcate standard deviation breaks at 61, 64, 67, 70, 73, 76, and 79. Shaded segments visually label the central region between 67 and 73 as sixty-eight percent, the regional sprawl between 64 and 76 as ninety-five percent, and the outer edges from 61 to 79 as ninety-nine point seven percent.          What is the z-score of the price of a pair of skis that cost $247, if the mean ski price is $279, with a standard deviation of $16?    Identify the given parameters: value , mean , and standard deviation .  Substitute these values into the z-score formula:   The price of the skis is exactly 2.0 standard deviations below the mean.   Normal distribution curve highlighting a z-score of -2.0.   A standard normal distribution bell curve centered at a z-score of zero. A vertical dashed line highlights a position at a z-score of negative two point zero, located significantly to the left of the center, showing the lower relative positioning of the ski price.          What is the z-score of a 5-scoop ice cream cone if the mean number of scoops is 3, with a standard deviation of 1 scoop?    Identify the given parameters: value , mean , and standard deviation .  Substitute these values into the z-score formula:   The 5-scoop cone is exactly 2.0 standard deviations above the mean.   Normal distribution curve highlighting a z-score of 2.0.   A standard normal distribution bell curve centered at a z-score of zero. A vertical dashed line highlights a position at a z-score of positive two point zero, located significantly to the right of the center, showing the higher relative positioning of the 5-scoop ice cream.          What is the z-score of the weight of a cow that tips the scales at 825 lbs, if the mean weight for cows of her type is 1150 lbs, with a standard deviation of 77 lbs?    Identify the given parameters: value , mean , and standard deviation .  Substitute these values into the z-score formula and round to two decimal places:   The cow's weight is approximately 4.22 standard deviations below the mean.   Normal distribution curve highlighting an extreme z-score of -4.22.   A standard normal distribution bell curve centered at a z-score of zero. An arrow and a vertical line outline a position out past negative four point zero on the tail region, indicating an extreme outlier below the population mean weight.          What is the z-score of a measured value of 0.0034, given mean and ?    Identify the given parameters: value , mean , and standard deviation .  Substitute these values into the standard z-score formula:   The measured value is exactly 0.875 standard deviations below the population mean.   Normal distribution curve highlighting a z-score of -0.875.   A standard normal distribution bell curve centered at a z-score of zero. A vertical dashed red line highlights a position slightly to the left of the center point at negative zero point eight seven five, marking the location of the value.          What is the z-score of a student's test score of 89, if the class average was 80 with a standard deviation of 4 points?    Identify the given parameters: raw score , class mean , and standard deviation .  Substitute these values into the z-score expression:   The student's test performance translates to a z-score of 2.25 , meaning it is 2.25 standard deviations above the classroom average.   Normal distribution curve highlighting a z-score of 2.25.   A standard normal distribution bell curve centered at a z-score of zero. A vertical dashed red line marks a position to the right of the center point at positive two point two five, showcasing an above-average baseline performance.         Kori categorized her spending for this month into four categories: food, rent, fun, and other. The percentage she spent in each category is displayed in the chart below.   Pie Chart of Kori's Monthly Spending Shares   A pie chart dividing Kori's monthly budget proportions into four sectors: Rent accounts for 31 percent, Other accounts for 29 percent, Food accounts for 24 percent, and Fun accounts for 16 percent.     If she spent a total of this month, how much money did she allocate to rent?    To find the exact dollar amount spent on rent, we convert the percentage share from the pie chart into a decimal and multiply it by the total monthly expenditures:        Therefore, Kori spent exactly on rent this month.      Suppose the height of adult women in the United States is normally distributed with a mean of 5' 8\" and a standard deviation of \". What is the probability that a randomly chosen woman in the United States is shorter than 5' 5\"?   Normal distribution curve of women's heights with the lower tail below 5' 5\" shaded.   A normal distribution curve centered at 5 feet 8 inches. The area under the curve to the left of 5 feet 5 inches is shaded in blue, representing the lower 2.5 percent of the population.       First, determine how many standard deviations 5' 5\" is from the mean of 5'8\". Since each standard deviation is \", a height of 5' 6.5\" is standard deviation below the mean, and 5' 5\" is exactly standard deviations below the mean.  We can find the total percentage of women who are 5' 5\" or taller by adding up the known regions of the normal distribution:    50% of women are taller than the mean of 5' 8\".    34% of women are between 5' 6.5\" and 5' 8\" (within standard deviation below the mean).    13.5% of women are between 5' 5\" and 5' 6.5\" (between and standard deviations below the mean).    Adding these regions together gives: . Since 97.5% of women are 5' 5\" or taller, the remaining portion is .   Alternative Method: The empirical rule states that 95% of the data falls within standard deviations of the mean. This leaves 5% split equally between the two extreme outer tails ( ). Therefore, the probability that a randomly chosen woman is shorter than 5' 5\" is 2.5% (or ).     Positive Correlation: Summer Heatwaves and Ice Cream Sales   A beachside shop owner wants to examine the relationship between the daily afternoon temperature ( , measured in degrees Fahrenheit) and the number of ice cream cones sold daily ( ). The data collected over a five-day period is presented below.    Daily Temperature vs. Ice Cream Sales    Day  Temperature ( in )  Ice Cream Cones Sold ( )   1 70 100  2 75 150  3 80 190  4 85 260  5 90 300    Using the simple linear regression model calculated from the observed data table above, predict the total number of ice cream cones sold if the afternoon temperature reaches .      340 cones   Incorrect. This value underestimates the strong upward trend observed as the temperature steps up to 100 degrees.     404 cones   Correct! Observe the data points and plug directly into the line: .     450 cones   Incorrect. While sales are rising fast, this estimate is slightly higher than what the mathematical trend line predicts.     512 cones   Incorrect. This value assumes exponential growth rather than a steady simple linear progression rate.      To predict the number of ice cream cones sold at 100°F, we first need to graph the data points from the table and calculate the line of best fit using linear regression.     Scatter Plot of Temperature vs. Ice Cream Cones Sold   A scatter plot showing an upward trend of daily sales as temperature rises, with a red regression line and labeled data points.          A store is doing inventory for one week to determine the popularity of a new product. The table below shows the number of items sold each day. Find the linear regression equation that models this data with the slope 8.66 and y-intercept 14.57, rounding coefficients to the nearest integer. Then, predict the number of items sold on the 10th day if the pattern of growth continues.   Weekly Product Inventory Tracking      Day Number ( )  Number Sold ( )   1 24  2 32  3 41  4 50  5 60  6 68  7 77       Step 1: Calculate the Regression Equation The linear regression equation is given by , where is the slope and is the y-intercept. Substituting the provided values, we have: Rounding the coefficients to the nearest integer gives us the simplified regression equation:    Step 2: Predict for Day 10 To estimate item performance on the tenth day, we evaluate our regression equation at : Rounding to the nearest whole item integer yields a final estimate of 105 items sold.   Linear Regression Mapping Weekly Product Growth   A scatter plot displaying a week of product sales velocity on a Cartesian plane. The horizontal axis charts the Day Number from 0 to 12, while the vertical axis registers the Number of Items Sold from 0 to 120. Seven blue coordinate markings move cleanly in an upward trajectory from day 1 to day 7. A straight red line begins at a baseline y-intercept of 14 and projects smoothly upward through the points, where a green marker target highlights the exact projection point for Day 10 at coordinate location (10, 103).        "
},
{
  "id": "ex-mean-median-mode",
  "level": "2",
  "url": "sec-stat-ch-ex.html#ex-mean-median-mode",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Find the mean, median, and mode for the following dataset:     To simplify the statistical calculations, we first arrange the dataset of values in ascending order:    1. Mean Calculation: The mean is calculated by summing all the values and dividing by the total number of data points ( ): Thus, the mean of the dataset is 30.25 .   2. Median Calculation: Since there is an even number of data points ( ), the median is found by taking the average of the two middle values (the 4th and 5th numbers in our ordered list, which are and ): Thus, the median of the dataset is 29.5 .   3. Mode Calculation: The mode is the value that appears most frequently in a dataset. Because every unique number in this list occurs exactly once, there is no mode .   "
},
{
  "id": "exercise-approx-sd-twenties",
  "level": "2",
  "url": "sec-stat-ch-ex.html#exercise-approx-sd-twenties",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Use the data 20, 24, 34, 38. Without actually computing the standard deviation, which of the following best approximates the standard deviation?      2    Incorrect. The data points span a total range of 18 units (from 20 to 38), so they sit much further than 2 units away from the center.      4    Incorrect. While 4 is a factor, the data points are spread out further from the mean of 29 than this value suggests.      8    Correct. The mean is 29. The data points sit 5 and 9 units away from this mean. An average distance of roughly 7-8 units is the most accurate estimate.      10    Incorrect. This value overestimates the standard deviation, as most points are closer to the mean than 10 units.     "
},
{
  "id": "exercise-rainfall-approx-sd",
  "level": "2",
  "url": "sec-stat-ch-ex.html#exercise-rainfall-approx-sd",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  The rainfall in a small town is recorded daily for two weeks, in inches: What are the mean and the approximate sample standard deviation for this data set?     Step 1: Calculate the Mean. Sum all 14 data entries and divide by the count:    Step 2: Find individual distances. Find the absolute difference between each entry and the mean of . Summing these 14 positive distances gives .   Step 3: Average the distances. Divide the sum of distances by the number of values:    Step 4: Approximate Standard Deviation. Because the geometric process of squaring numbers shifts standard deviation upwards, the true standard deviation value will sit slightly higher than our baseline average distance. We can approximate the sample standard deviation to be just above 0.81 (approximately to ).   "
},
{
  "id": "ex-empirical-rule-heights",
  "level": "2",
  "url": "sec-stat-ch-ex.html#ex-empirical-rule-heights",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  The heights of adult men in a certain city are normally distributed with a mean of 70 inches and a standard deviation ( ) of 3 inches. Use the Empirical Rule to answer the following questions:  What percentage of men are between 67 and 73 inches tall?  What percentage of men are between 61 and 79 inches tall?  What percentage of men are taller than 76 inches?      The Empirical Rule (also known as the 68-95-99.7 rule) states that for a perfectly normal distribution:  Approximately of the data falls within standard deviation of the mean ( ).  Approximately of the data falls within standard deviations of the mean ( ).  Approximately of the data falls within standard deviations of the mean ( ).    Given parameters: inches and Standard Deviation inches. Let us map out the standard deviation markers:  mean  mean  mean     Part a) Interval [67, 73]: These values correspond exactly to mean and mean . According to the rule, approximately 68% of the men fall within this height range.   Part b) Interval [61, 79]: These values correspond exactly to mean and mean . According to the rule, approximately 99.7% of the men fall within this height range.   Part c) Heights above 76 inches: A height of 76 inches corresponds exactly to mean . Since a normal curve is perfectly symmetrical, of the data falls above the mean of 70. The region between the mean (70) and 2 standard deviations above the mean (76) contains exactly half of the range, which is . To find the tail value remaining above 76: Thus, approximately 2.5% of men in the city are taller than 76 inches.    Normal Distribution of Heights with Empirical Rule Breakdowns   A symmetrical normal distribution bell curve plotted along a horizontal axis showing heights from 58 to 82 inches. The peak is centered perfectly at 70 inches. Dashed vertical lines demarcate standard deviation breaks at 61, 64, 67, 70, 73, 76, and 79. Shaded segments visually label the central region between 67 and 73 as sixty-eight percent, the regional sprawl between 64 and 76 as ninety-five percent, and the outer edges from 61 to 79 as ninety-nine point seven percent.      "
},
{
  "id": "ex-ski-price",
  "level": "2",
  "url": "sec-stat-ch-ex.html#ex-ski-price",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  What is the z-score of the price of a pair of skis that cost $247, if the mean ski price is $279, with a standard deviation of $16?    Identify the given parameters: value , mean , and standard deviation .  Substitute these values into the z-score formula:   The price of the skis is exactly 2.0 standard deviations below the mean.   Normal distribution curve highlighting a z-score of -2.0.   A standard normal distribution bell curve centered at a z-score of zero. A vertical dashed line highlights a position at a z-score of negative two point zero, located significantly to the left of the center, showing the lower relative positioning of the ski price.      "
},
{
  "id": "ex-ice-cream-scoops",
  "level": "2",
  "url": "sec-stat-ch-ex.html#ex-ice-cream-scoops",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  What is the z-score of a 5-scoop ice cream cone if the mean number of scoops is 3, with a standard deviation of 1 scoop?    Identify the given parameters: value , mean , and standard deviation .  Substitute these values into the z-score formula:   The 5-scoop cone is exactly 2.0 standard deviations above the mean.   Normal distribution curve highlighting a z-score of 2.0.   A standard normal distribution bell curve centered at a z-score of zero. A vertical dashed line highlights a position at a z-score of positive two point zero, located significantly to the right of the center, showing the higher relative positioning of the 5-scoop ice cream.      "
},
{
  "id": "ex-cow-weight",
  "level": "2",
  "url": "sec-stat-ch-ex.html#ex-cow-weight",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  What is the z-score of the weight of a cow that tips the scales at 825 lbs, if the mean weight for cows of her type is 1150 lbs, with a standard deviation of 77 lbs?    Identify the given parameters: value , mean , and standard deviation .  Substitute these values into the z-score formula and round to two decimal places:   The cow's weight is approximately 4.22 standard deviations below the mean.   Normal distribution curve highlighting an extreme z-score of -4.22.   A standard normal distribution bell curve centered at a z-score of zero. An arrow and a vertical line outline a position out past negative four point zero on the tail region, indicating an extreme outlier below the population mean weight.      "
},
{
  "id": "ex-decimal-measurement",
  "level": "2",
  "url": "sec-stat-ch-ex.html#ex-decimal-measurement",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  What is the z-score of a measured value of 0.0034, given mean and ?    Identify the given parameters: value , mean , and standard deviation .  Substitute these values into the standard z-score formula:   The measured value is exactly 0.875 standard deviations below the population mean.   Normal distribution curve highlighting a z-score of -0.875.   A standard normal distribution bell curve centered at a z-score of zero. A vertical dashed red line highlights a position slightly to the left of the center point at negative zero point eight seven five, marking the location of the value.      "
},
{
  "id": "ex-student-test-score",
  "level": "2",
  "url": "sec-stat-ch-ex.html#ex-student-test-score",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  What is the z-score of a student's test score of 89, if the class average was 80 with a standard deviation of 4 points?    Identify the given parameters: raw score , class mean , and standard deviation .  Substitute these values into the z-score expression:   The student's test performance translates to a z-score of 2.25 , meaning it is 2.25 standard deviations above the classroom average.   Normal distribution curve highlighting a z-score of 2.25.   A standard normal distribution bell curve centered at a z-score of zero. A vertical dashed red line marks a position to the right of the center point at positive two point two five, showcasing an above-average baseline performance.      "
},
{
  "id": "exercise-kori-monthly-budget",
  "level": "2",
  "url": "sec-stat-ch-ex.html#exercise-kori-monthly-budget",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  Kori categorized her spending for this month into four categories: food, rent, fun, and other. The percentage she spent in each category is displayed in the chart below.   Pie Chart of Kori's Monthly Spending Shares   A pie chart dividing Kori's monthly budget proportions into four sectors: Rent accounts for 31 percent, Other accounts for 29 percent, Food accounts for 24 percent, and Fun accounts for 16 percent.     If she spent a total of this month, how much money did she allocate to rent?    To find the exact dollar amount spent on rent, we convert the percentage share from the pie chart into a decimal and multiply it by the total monthly expenditures:        Therefore, Kori spent exactly on rent this month.   "
},
{
  "id": "exer-women-height-distribution",
  "level": "2",
  "url": "sec-stat-ch-ex.html#exer-women-height-distribution",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  Suppose the height of adult women in the United States is normally distributed with a mean of 5' 8\" and a standard deviation of \". What is the probability that a randomly chosen woman in the United States is shorter than 5' 5\"?   Normal distribution curve of women's heights with the lower tail below 5' 5\" shaded.   A normal distribution curve centered at 5 feet 8 inches. The area under the curve to the left of 5 feet 5 inches is shaded in blue, representing the lower 2.5 percent of the population.       First, determine how many standard deviations 5' 5\" is from the mean of 5'8\". Since each standard deviation is \", a height of 5' 6.5\" is standard deviation below the mean, and 5' 5\" is exactly standard deviations below the mean.  We can find the total percentage of women who are 5' 5\" or taller by adding up the known regions of the normal distribution:    50% of women are taller than the mean of 5' 8\".    34% of women are between 5' 6.5\" and 5' 8\" (within standard deviation below the mean).    13.5% of women are between 5' 5\" and 5' 6.5\" (between and standard deviations below the mean).    Adding these regions together gives: . Since 97.5% of women are 5' 5\" or taller, the remaining portion is .   Alternative Method: The empirical rule states that 95% of the data falls within standard deviations of the mean. This leaves 5% split equally between the two extreme outer tails ( ). Therefore, the probability that a randomly chosen woman is shorter than 5' 5\" is 2.5% (or ).   "
},
{
  "id": "exercise-ice-cream-prediction",
  "level": "2",
  "url": "sec-stat-ch-ex.html#exercise-ice-cream-prediction",
  "type": "Exercise",
  "number": "12",
  "title": "Positive Correlation: Summer Heatwaves and Ice Cream Sales.",
  "body": " Positive Correlation: Summer Heatwaves and Ice Cream Sales   A beachside shop owner wants to examine the relationship between the daily afternoon temperature ( , measured in degrees Fahrenheit) and the number of ice cream cones sold daily ( ). The data collected over a five-day period is presented below.    Daily Temperature vs. Ice Cream Sales    Day  Temperature ( in )  Ice Cream Cones Sold ( )   1 70 100  2 75 150  3 80 190  4 85 260  5 90 300    Using the simple linear regression model calculated from the observed data table above, predict the total number of ice cream cones sold if the afternoon temperature reaches .      340 cones   Incorrect. This value underestimates the strong upward trend observed as the temperature steps up to 100 degrees.     404 cones   Correct! Observe the data points and plug directly into the line: .     450 cones   Incorrect. While sales are rising fast, this estimate is slightly higher than what the mathematical trend line predicts.     512 cones   Incorrect. This value assumes exponential growth rather than a steady simple linear progression rate.      To predict the number of ice cream cones sold at 100°F, we first need to graph the data points from the table and calculate the line of best fit using linear regression.     Scatter Plot of Temperature vs. Ice Cream Cones Sold   A scatter plot showing an upward trend of daily sales as temperature rises, with a red regression line and labeled data points.       "
},
{
  "id": "ex-product-popularity",
  "level": "2",
  "url": "sec-stat-ch-ex.html#ex-product-popularity",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "  A store is doing inventory for one week to determine the popularity of a new product. The table below shows the number of items sold each day. Find the linear regression equation that models this data with the slope 8.66 and y-intercept 14.57, rounding coefficients to the nearest integer. Then, predict the number of items sold on the 10th day if the pattern of growth continues.   Weekly Product Inventory Tracking      Day Number ( )  Number Sold ( )   1 24  2 32  3 41  4 50  5 60  6 68  7 77       Step 1: Calculate the Regression Equation The linear regression equation is given by , where is the slope and is the y-intercept. Substituting the provided values, we have: Rounding the coefficients to the nearest integer gives us the simplified regression equation:    Step 2: Predict for Day 10 To estimate item performance on the tenth day, we evaluate our regression equation at : Rounding to the nearest whole item integer yields a final estimate of 105 items sold.   Linear Regression Mapping Weekly Product Growth   A scatter plot displaying a week of product sales velocity on a Cartesian plane. The horizontal axis charts the Day Number from 0 to 12, while the vertical axis registers the Number of Items Sold from 0 to 120. Seven blue coordinate markings move cleanly in an upward trajectory from day 1 to day 7. A straight red line begins at a baseline y-intercept of 14 and projects smoothly upward through the points, where a green marker target highlights the exact projection point for Day 10 at coordinate location (10, 103).      "
},
{
  "id": "handout-voting-methods",
  "level": "1",
  "url": "handout-voting-methods.html",
  "type": "Worksheet",
  "number": "",
  "title": "Voting Methods Handout",
  "body": " Voting Methods Handout  This handout outlines the core procedural rules, calculation steps, and the four primary preference-ballot voting methods:      The Plurality Method Selecting the candidate who receives the most first-place votes, regardless of whether they achieve a strict majority.   The Plurality-with-Elimination Method An iterative process where the candidate with the fewest first-place votes is eliminated, and their ballots are redistributed, continuing until a candidate achieves a true majority.   The Borda Count Method A point-based system where points are assigned to each ranking position on a ballot, and the candidate with the highest total points across all ballots wins.   The Pairwise Comparison Method A head-to-head match-up approach where every candidate is compared one-on-one against every other candidate to see who wins the most direct duels, identifying a Condorcet candidate if one exists.     Exercises and Workspaces      Four students are running for president of their residence hall: Debra (D), Farah (F), Jorge (J), and Hillary (H). The votes of their fellow students are summarized in the following preferences table. Who is declared the president using the plurality method?    Number of Votes  52  45  13  9  4    First choice  D  F  J  F  H    Second choice  F  J  F  J  J    Third choice  H  H  H  D  D    Fourth choice  J  D  D  H  F      First-choice totals are D = 52, F = 54, J = 13, and H = 4. The winner by the plurality method is F .         Four students are running for president of their residence hall: Debra (D), Farah (F), Jorge (J), and Hillary (H). The votes of their fellow students are summarized in the following preferences table. Who is declared the president using the plurality-with-elimination method?    Number of Votes  52  45  13  9  4    First choice  D  F  J  F  H    Second choice  F  J  F  J  J    Third choice  H  H  H  D  D    Fourth choice  J  D  D  H  F      Eliminate H first (4 votes), which transfers to J, giving J 17 votes. Then eliminate J; all 17 J ballots transfer to F. Final totals are D = 52 and F = 71, so the plurality-with-elimination winner is F .         Four students are running for president of their residence hall: Debra (D), Farah (F), Jorge (J), and Hillary (H). The votes of their fellow students are summarized in the following preferences table. Who is declared the president using the Borda count method?    Number of Votes  52  45  13  9  4    First choice  D  F  J  F  H    Second choice  F  J  F  J  J    Third choice  H  H  H  D  D    Fourth choice  J  D  D  H  F      Using Borda scores 3-2-1-0, the totals are D = 169, F = 292, J = 155, and H = 122. The Borda count winner is F .         Four students are running for president of their residence hall: Debra (D), Farah (F), Jorge (J), and Hillary (H). The votes of their fellow students are summarized in the following preferences table. Who is declared the president using the pairwise comparison method? Is there a Condorcet winner?    Number of Votes  52  45  13  9  4    First choice  D  F  J  F  H    Second choice  F  J  F  J  J    Third choice  H  H  H  D  D    Fourth choice  J  D  D  H  F      In head-to-head matchups, F beats D, F beats J, and F beats H. Candidate F wins every pairwise comparison and is the Condorcet winner.         Four professors are running for president of the League of Innovation: Doug (D), Francis (F), Gallagher (G), and Smith (S). The votes of the members in the League of Innovation are summarized in the preference table below.    Number of Votes  30  22  18  10  2    First Choice  F  G  S  D  G    Second Choice  D  D  G  S  S    Third Choice  G  S  D  G  D    Fourth Choice  S  F  F  F  F     How many members voted in this election?  Using the plurality method, who becomes the new president?  Using the plurality-with-elimination method, who becomes the new president?  Using the Borda count method, who becomes the new president?  Using the pairwise comparison method, who becomes the new president?     Total votes = 82. Plurality totals are F = 30, G = 24, S = 18, and D = 10, so F wins by plurality.  For plurality-with-elimination, D is eliminated first and its 10 votes transfer to S, then G is eliminated and its votes transfer to S, giving S the win.  Using Borda scores 3-2-1-0, the totals are D = 154, G = 148, S = 100, and F = 90. The Borda winner is D .  In pairwise comparison, G beats D, G beats F, and G beats S, so the pairwise winner is G .     "
},
{
  "id": "ws-ex-plurality",
  "level": "2",
  "url": "handout-voting-methods.html#ws-ex-plurality",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Four students are running for president of their residence hall: Debra (D), Farah (F), Jorge (J), and Hillary (H). The votes of their fellow students are summarized in the following preferences table. Who is declared the president using the plurality method?    Number of Votes  52  45  13  9  4    First choice  D  F  J  F  H    Second choice  F  J  F  J  J    Third choice  H  H  H  D  D    Fourth choice  J  D  D  H  F      First-choice totals are D = 52, F = 54, J = 13, and H = 4. The winner by the plurality method is F .   "
},
{
  "id": "ws-ex-elimination",
  "level": "2",
  "url": "handout-voting-methods.html#ws-ex-elimination",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Four students are running for president of their residence hall: Debra (D), Farah (F), Jorge (J), and Hillary (H). The votes of their fellow students are summarized in the following preferences table. Who is declared the president using the plurality-with-elimination method?    Number of Votes  52  45  13  9  4    First choice  D  F  J  F  H    Second choice  F  J  F  J  J    Third choice  H  H  H  D  D    Fourth choice  J  D  D  H  F      Eliminate H first (4 votes), which transfers to J, giving J 17 votes. Then eliminate J; all 17 J ballots transfer to F. Final totals are D = 52 and F = 71, so the plurality-with-elimination winner is F .   "
},
{
  "id": "ws-ex-borda",
  "level": "2",
  "url": "handout-voting-methods.html#ws-ex-borda",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Four students are running for president of their residence hall: Debra (D), Farah (F), Jorge (J), and Hillary (H). The votes of their fellow students are summarized in the following preferences table. Who is declared the president using the Borda count method?    Number of Votes  52  45  13  9  4    First choice  D  F  J  F  H    Second choice  F  J  F  J  J    Third choice  H  H  H  D  D    Fourth choice  J  D  D  H  F      Using Borda scores 3-2-1-0, the totals are D = 169, F = 292, J = 155, and H = 122. The Borda count winner is F .   "
},
{
  "id": "ws-ex-pairwise",
  "level": "2",
  "url": "handout-voting-methods.html#ws-ex-pairwise",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Four students are running for president of their residence hall: Debra (D), Farah (F), Jorge (J), and Hillary (H). The votes of their fellow students are summarized in the following preferences table. Who is declared the president using the pairwise comparison method? Is there a Condorcet winner?    Number of Votes  52  45  13  9  4    First choice  D  F  J  F  H    Second choice  F  J  F  J  J    Third choice  H  H  H  D  D    Fourth choice  J  D  D  H  F      In head-to-head matchups, F beats D, F beats J, and F beats H. Candidate F wins every pairwise comparison and is the Condorcet winner.   "
},
{
  "id": "ws-ex-professors-election",
  "level": "2",
  "url": "handout-voting-methods.html#ws-ex-professors-election",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Four professors are running for president of the League of Innovation: Doug (D), Francis (F), Gallagher (G), and Smith (S). The votes of the members in the League of Innovation are summarized in the preference table below.    Number of Votes  30  22  18  10  2    First Choice  F  G  S  D  G    Second Choice  D  D  G  S  S    Third Choice  G  S  D  G  D    Fourth Choice  S  F  F  F  F     How many members voted in this election?  Using the plurality method, who becomes the new president?  Using the plurality-with-elimination method, who becomes the new president?  Using the Borda count method, who becomes the new president?  Using the pairwise comparison method, who becomes the new president?     Total votes = 82. Plurality totals are F = 30, G = 24, S = 18, and D = 10, so F wins by plurality.  For plurality-with-elimination, D is eliminated first and its 10 votes transfer to S, then G is eliminated and its votes transfer to S, giving S the win.  Using Borda scores 3-2-1-0, the totals are D = 154, G = 148, S = 100, and F = 90. The Borda winner is D .  In pairwise comparison, G beats D, G beats F, and G beats S, so the pairwise winner is G .   "
},
{
  "id": "handout-apportionment",
  "level": "1",
  "url": "handout-apportionment.html",
  "type": "Worksheet",
  "number": "",
  "title": "Apportionment Handout",
  "body": " Apportionment Handout   This handout covers the core metrics and sequential steps for the major historic apportionment methods:    Calculating the Standard Divisor, Standard Quotas, Lower Quotas, and Upper Quotas.   Hamilton's Method Assigning initial seats using the Lower Quota, then distributing surplus seats based on the largest fractional remainders.   Jefferson's Method Finding a Modified Divisor that alters the quotas so that the sum of the Lower Quotas exactly matches the total seats.   Adams's Method Finding a Modified Divisor that alters the quotas so that the sum of the Upper Quotas exactly matches the total seats.     Exercises and Workspaces      A hospital has a nursing staff of 250 nurses working in four shifts:  Shift A: 7:00 A.M. to 1:00 P.M.   Shift B: 1:00 P.M. to 7:00 P.M.   Shift C: 7:00 P.M. to 1:00 A.M.   Shift D: 1:00 A.M. to 7:00 A.M.   The number of nurses apportioned to each shift is based on the average number of patients per shift, given in the table below. Use Hamilton's method to apportion the 250 nurses among the shifts at the hospital.   Average Number of Patients per Shift        Shift  A  B  C  D    Average Patients  453  650  547  350      To complete the apportionment using Hamilton's method, we follow these sequential calculation steps:      Find the Total Population: Sum the average number of patients across all shifts.      Calculate the Standard Divisor ( ): Divide the total population by the total number of items (250 nurses) to be allocated.      Find Standard and Lower Quotas: Divide each shift's patient count by the Standard Divisor ( ). The Lower Quota is found by rounding down to the nearest whole integer.  Shift A:  (Lower Quota = 56)  Shift B:  (Lower Quota = 81)  Shift C:  (Lower Quota = 68)  Shift D:  (Lower Quota = 43)       Distribute Surplus Items: Summing the lower quotas gives nurses. Since we must allocate 250 nurses, there is a surplus of nurses. Hamilton's method gives these surplus spots to the shifts with the largest fractional remainder parts:  Shift D has the largest remainder ( ) and receives nurse.  Shift A has the second-largest remainder ( ) and receives nurse.       The complete apportionment layout is summarized below:   Hamilton's Method Apportionment Results (Transposed)         Metric \/ Step  Shift A  Shift B  Shift C  Shift D  Total    Patients  453  650  547  350  2000    Standard Quota  56.625  81.250  68.375  43.750  -    Lower Quota  56  81  68  43  248    Surplus Added  +1  0  0  +1  +2    Final Apportionment  57  81  68  44  250           A hospital has a nursing staff of 250 nurses working in four shifts. The number of nurses apportioned to each shift is based on the average number of patients per shift, given in the table below. Use Jefferson's method to apportion the 250 nurses among the shifts at the hospital.   Average Number of Patients per Shift        Shift  A  B  C  D    Average Patients  453  650  547  350      To complete the apportionment using Jefferson's method, we apply a modified divisor so that the sum of the lower quotas exactly equals the required total.      Find Total Population and Standard Divisor ( ):        Test the Standard Divisor: Dividing each population by and rounding down gives lower quotas of and . The sum of these initial lower quotas is . This falls short of the nurses needed.     Determine a Modified Divisor ( ): Because our initial sum is too small, Jefferson's method requires us to choose a smaller divisor to increase the individual quotas. Testing a modified divisor of shifts the lower quotas upward to exactly equal .     The complete apportionment computations under Jefferson's method are detailed below:   Jefferson's Method Apportionment Results (Modified Divisor: 7.93)          Metric \/ Step  Shift A  Shift B  Shift C  Shift D  Total     Patients  453  650  547  350  2000     Standard Quota (d = 8)  56.625  81.250  68.375  43.750  —     Initial Lower Quota  56  81  68  43  248     Modified Quota (dm = 7.93)  57.125  81.967  68.979  44.136  —     Final Apportionment  57  81  68  44  250           A hospital has a nursing staff of 250 nurses working in four shifts. The number of nurses apportioned to each shift is based on the average number of patients per shift, given in the table below. Use Adams's method to apportion the 250 nurses among the shifts at the hospital.   Average Number of Patients per Shift        Shift  A  B  C  D    Average Patients  453  650  547  350      To complete the apportionment using Adams's method, we apply a modified divisor so that the sum of the upper quotas (rounded up) exactly equals the required total.      Find Total Population and Standard Divisor ( ):        Test the Standard Divisor: Dividing each population by and rounding up to the next highest integer gives upper quotas of and . The sum of these initial upper quotas is . This exceeds the target of nurses.     Determine a Modified Divisor ( ): Because our initial sum is too large, Adams's method requires us to choose a larger divisor to decrease the individual quotas. Testing a modified divisor of shifts the upper quotas downward to exactly equal .     The complete apportionment calculations under Adams's method are organized in the accessible data layout below:   Adams's Method Apportionment Results (Modified Divisor: 8.07)         Metric \/ Step  Shift A  Shift B  Shift C  Shift D  Total    Patients  453  650  547  350  2000    Standard Quota ( )  56.625  81.250  68.375  43.750  —    Initial Upper Quota  57  82  69  44  252    Modified Quota ( )  56.134  80.545  67.782  43.371  —    Final Apportionment  57  81  68  44  250           The police department in a large city has 180 new officers to be apportioned among 6 high-crime precincts. The total number of recorded crimes for each respective precinct is documented in the data profile below.   Recorded Crimes by Police Precinct          Precinct  A  B  C  D  E  F    Crimes  446  526  835  227  338  456        Use Hamilton's method to apportion the new officers among the precincts.     1. Identify Metrics: Total crimes population equals . The Standard Divisor is:    2. Distribute Remainders: Summing the lower whole quotas gives allocations, leaving a surplus of seats. Hamilton's method awards these seats to the largest fractional remainders: Precinct B ( ) and Precinct E ( ).   Hamilton's Method Apportionment Results       Metric \/ Step  A  B  C  D  E  F  Total    Crimes  446  526  835  227  338  456  2828    Standard Quota  28.388  33.479  53.147  14.448  21.513  29.024  —    Lower Quota  28  33  53  14  21  29  178    Surplus Added  0  +1  0  0  +1  0  +2    Final Apportionment  28  34  53  14  22  29  180         Use Jefferson's method to apportion the new officers among the precincts.    Because the initial lower quota sum ( ) is too small, Jefferson's method requires modifying the divisor downward to raise the quotas. Choosing a smaller modified divisor of shifts the lower whole quotas up to hit the targeted total allocation sum of exactly .   Jefferson's Method Apportionment Results (Modified Divisor: 15.46)       Metric \/ Step  A  B  C  D  E  F  Total    Crimes  446  526  835  227  338  456  2828    Modified Quota  28.849  34.023  54.010  14.683  21.863  29.495  —    Final Apportionment  28  34  54  14  21  29  180         Use Adams's method to apportion the new officers among the precincts.    Testing the standard upper quotas (rounding fractions up) gives a sum of , which exceeds the 180 seats. Adams's method resolves this by increasing the divisor. Choosing a larger modified divisor of pushes the quotas downward so that their rounded-up total sums exactly to .   Adams's Method Apportionment Results (Modified Divisor: 15.94)       Metric \/ Step  A  B  C  D  E  F  Total    Crimes  446  526  835  227  338  456  2828    Modified Quota  27.980  32.999  52.384  14.241  21.205  28.607  —    Final Apportionment  28  33  53  15  22  29  180        "
},
{
  "id": "handout-apportionment-4-1",
  "level": "2",
  "url": "handout-apportionment.html#handout-apportionment-4-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  A hospital has a nursing staff of 250 nurses working in four shifts:  Shift A: 7:00 A.M. to 1:00 P.M.   Shift B: 1:00 P.M. to 7:00 P.M.   Shift C: 7:00 P.M. to 1:00 A.M.   Shift D: 1:00 A.M. to 7:00 A.M.   The number of nurses apportioned to each shift is based on the average number of patients per shift, given in the table below. Use Hamilton's method to apportion the 250 nurses among the shifts at the hospital.   Average Number of Patients per Shift        Shift  A  B  C  D    Average Patients  453  650  547  350      To complete the apportionment using Hamilton's method, we follow these sequential calculation steps:      Find the Total Population: Sum the average number of patients across all shifts.      Calculate the Standard Divisor ( ): Divide the total population by the total number of items (250 nurses) to be allocated.      Find Standard and Lower Quotas: Divide each shift's patient count by the Standard Divisor ( ). The Lower Quota is found by rounding down to the nearest whole integer.  Shift A:  (Lower Quota = 56)  Shift B:  (Lower Quota = 81)  Shift C:  (Lower Quota = 68)  Shift D:  (Lower Quota = 43)       Distribute Surplus Items: Summing the lower quotas gives nurses. Since we must allocate 250 nurses, there is a surplus of nurses. Hamilton's method gives these surplus spots to the shifts with the largest fractional remainder parts:  Shift D has the largest remainder ( ) and receives nurse.  Shift A has the second-largest remainder ( ) and receives nurse.       The complete apportionment layout is summarized below:   Hamilton's Method Apportionment Results (Transposed)         Metric \/ Step  Shift A  Shift B  Shift C  Shift D  Total    Patients  453  650  547  350  2000    Standard Quota  56.625  81.250  68.375  43.750  -    Lower Quota  56  81  68  43  248    Surplus Added  +1  0  0  +1  +2    Final Apportionment  57  81  68  44  250     "
},
{
  "id": "handout-apportionment-5-1",
  "level": "2",
  "url": "handout-apportionment.html#handout-apportionment-5-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  A hospital has a nursing staff of 250 nurses working in four shifts. The number of nurses apportioned to each shift is based on the average number of patients per shift, given in the table below. Use Jefferson's method to apportion the 250 nurses among the shifts at the hospital.   Average Number of Patients per Shift        Shift  A  B  C  D    Average Patients  453  650  547  350      To complete the apportionment using Jefferson's method, we apply a modified divisor so that the sum of the lower quotas exactly equals the required total.      Find Total Population and Standard Divisor ( ):        Test the Standard Divisor: Dividing each population by and rounding down gives lower quotas of and . The sum of these initial lower quotas is . This falls short of the nurses needed.     Determine a Modified Divisor ( ): Because our initial sum is too small, Jefferson's method requires us to choose a smaller divisor to increase the individual quotas. Testing a modified divisor of shifts the lower quotas upward to exactly equal .     The complete apportionment computations under Jefferson's method are detailed below:   Jefferson's Method Apportionment Results (Modified Divisor: 7.93)          Metric \/ Step  Shift A  Shift B  Shift C  Shift D  Total     Patients  453  650  547  350  2000     Standard Quota (d = 8)  56.625  81.250  68.375  43.750  —     Initial Lower Quota  56  81  68  43  248     Modified Quota (dm = 7.93)  57.125  81.967  68.979  44.136  —     Final Apportionment  57  81  68  44  250     "
},
{
  "id": "handout-apportionment-6-1",
  "level": "2",
  "url": "handout-apportionment.html#handout-apportionment-6-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  A hospital has a nursing staff of 250 nurses working in four shifts. The number of nurses apportioned to each shift is based on the average number of patients per shift, given in the table below. Use Adams's method to apportion the 250 nurses among the shifts at the hospital.   Average Number of Patients per Shift        Shift  A  B  C  D    Average Patients  453  650  547  350      To complete the apportionment using Adams's method, we apply a modified divisor so that the sum of the upper quotas (rounded up) exactly equals the required total.      Find Total Population and Standard Divisor ( ):        Test the Standard Divisor: Dividing each population by and rounding up to the next highest integer gives upper quotas of and . The sum of these initial upper quotas is . This exceeds the target of nurses.     Determine a Modified Divisor ( ): Because our initial sum is too large, Adams's method requires us to choose a larger divisor to decrease the individual quotas. Testing a modified divisor of shifts the upper quotas downward to exactly equal .     The complete apportionment calculations under Adams's method are organized in the accessible data layout below:   Adams's Method Apportionment Results (Modified Divisor: 8.07)         Metric \/ Step  Shift A  Shift B  Shift C  Shift D  Total    Patients  453  650  547  350  2000    Standard Quota ( )  56.625  81.250  68.375  43.750  —    Initial Upper Quota  57  82  69  44  252    Modified Quota ( )  56.134  80.545  67.782  43.371  —    Final Apportionment  57  81  68  44  250     "
},
{
  "id": "handout-apportionment-7-1",
  "level": "2",
  "url": "handout-apportionment.html#handout-apportionment-7-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  The police department in a large city has 180 new officers to be apportioned among 6 high-crime precincts. The total number of recorded crimes for each respective precinct is documented in the data profile below.   Recorded Crimes by Police Precinct          Precinct  A  B  C  D  E  F    Crimes  446  526  835  227  338  456        Use Hamilton's method to apportion the new officers among the precincts.     1. Identify Metrics: Total crimes population equals . The Standard Divisor is:    2. Distribute Remainders: Summing the lower whole quotas gives allocations, leaving a surplus of seats. Hamilton's method awards these seats to the largest fractional remainders: Precinct B ( ) and Precinct E ( ).   Hamilton's Method Apportionment Results       Metric \/ Step  A  B  C  D  E  F  Total    Crimes  446  526  835  227  338  456  2828    Standard Quota  28.388  33.479  53.147  14.448  21.513  29.024  —    Lower Quota  28  33  53  14  21  29  178    Surplus Added  0  +1  0  0  +1  0  +2    Final Apportionment  28  34  53  14  22  29  180         Use Jefferson's method to apportion the new officers among the precincts.    Because the initial lower quota sum ( ) is too small, Jefferson's method requires modifying the divisor downward to raise the quotas. Choosing a smaller modified divisor of shifts the lower whole quotas up to hit the targeted total allocation sum of exactly .   Jefferson's Method Apportionment Results (Modified Divisor: 15.46)       Metric \/ Step  A  B  C  D  E  F  Total    Crimes  446  526  835  227  338  456  2828    Modified Quota  28.849  34.023  54.010  14.683  21.863  29.495  —    Final Apportionment  28  34  54  14  21  29  180         Use Adams's method to apportion the new officers among the precincts.    Testing the standard upper quotas (rounding fractions up) gives a sum of , which exceeds the 180 seats. Adams's method resolves this by increasing the divisor. Choosing a larger modified divisor of pushes the quotas downward so that their rounded-up total sums exactly to .   Adams's Method Apportionment Results (Modified Divisor: 15.94)       Metric \/ Step  A  B  C  D  E  F  Total    Crimes  446  526  835  227  338  456  2828    Modified Quota  27.980  32.999  52.384  14.241  21.205  28.607  —    Final Apportionment  28  33  53  15  22  29  180      "
},
{
  "id": "handout-finance",
  "level": "1",
  "url": "handout-finance.html",
  "type": "Worksheet",
  "number": "",
  "title": "Personal Finance Handout",
  "body": " Personal Finance Handout   This handout covers essential mathematical principles for evaluating individual savings, annuities, and debt management strategies:     Basic Interest Calculations Computing and comparing simple interest and compound interest models over various compounding periods.   Savings and Annuities Analyzing regular deposit schedules, future value growth patterns, and long-term retirement accounts.   Loans and Spendings Evaluating fixed-rate installment loans, calculating monthly amortization values, and managing large debts including home mortgages.     Exercises and Workspaces      In order to pay for baseball uniforms, a school takes out a simple interest loan for $20,000 for 7 months at a rate of 12%. Find the future value of the loan.    To find the future value of a loan using a simple interest model, we extract our known variables and evaluate using the linear simple interest equation.   Identify Given Variables:   Principal ( ):   Annual Interest Rate ( ):   Time ( ):      Step-by-Step Calculation:     Calculate Accumulated Interest ( ): Multiply Principal by Rate by Time.   The total accumulated interest generated over the 7 months is .     Calculate Future Value ( ): Sum the initial principal amount and the newly accumulated interest.       The final future value of the loan at maturity is .         What is the amount of the deposit needed if your financial goal is to save $24,000 in 3 years with a rate of 7.5% compounded semiannually ?    To find the initial deposit (present value) required to meet a future financial goal with compound interest, we rearrange the compound interest formula to solve for the principal .   Identify Given Variables:   Future Value Goal ( ):   Annual Interest Rate ( ):   Compounding Periods per Year ( ):  (semiannually)  Time ( ):      Step-by-Step Calculation:     State the Present Value Formula:       Substitute the Values: Find the interest rate per period ( ) and total number of compounding periods ( ).        Evaluate the Denominator:        Calculate the Final Principal Amount: Divide the future goal by the compounding factor and round to the nearest cent.      The initial deposit amount needed to meet your financial goal is .         Your sister has her first child and you decide to open an annuity for your baby nephew. You deposit $30 at the end of each month into an annuity that returns 2.5% annual interest.      How much will your nephew have in his annuity when he goes off to college (18 years from now)?    To find the future value of regular monthly contributions, we evaluate using the future value formula for an ordinary annuity.   Identify Given Variables:   Monthly Payment ( ):   Annual Interest Rate ( ):   Compounding Periods per Year ( ):  (monthly)  Time ( ):      Step-by-Step Calculation:     State the Annuity Future Value Formula:       Calculate Intermediate Terms: Find the monthly interest rate and the total number of deposits.       Substitute and Evaluate:           When your nephew leaves for college, the account will have accumulated .       How much interest was earned?    To determine total interest earned, we calculate your total out-of-pocket contributions over the 18 years and subtract that value from the accumulated future value.   Step-by-Step Calculation:     Calculate Total Out-of-Pocket Deposits: Multiply the monthly payment by the total number of compound periods over 18 years.  The sum of all out-of-pocket deposits is .     Calculate Total Interest Earned: Subtract total out-of-pocket deposits from the accumulated future value found in Task 1.       The total interest earned by the annuity is .          The purchase cost of a Camry is $32,500. This vehicle can be financed by providing a $3,000 down payment and committing to monthly installment payments of $680.25 per month for 60 months.      Determine the amount financed.    The amount financed is the remaining vehicle balance that must be covered by a loan after subtracting the initial down payment from the base purchase price.      The base amount financed through the loan is .       Determine the total installment charge (total installment price).    The total installment price represents the absolute total cost of buying the car over time, found by adding the down payment to the sum of all monthly payments.   Step-by-Step Calculation:     Calculate Total Monthly Deferred Payments: Multiply the monthly commitment by the total number of payments. The sum of all monthly installments across 60 months is .     Calculate Total Out-of-Pocket Cost: Combine the monthly payments with the initial down payment.       The total installment cost for purchasing the vehicle is .       Determine the finance charge.    The finance charge represents the total interest paid for borrowing money, calculated by finding the difference between the total installment price and the original cash purchase cost.      The absolute cost of borrowing (total interest expense) is .          A new fax machine costs Worcester State University $2,670. They are to pay it off in 18 months at a 9% simple interest rate .      What will each monthly payment be?    To find the monthly installment value, we first compute the total future value of the loan (principal plus interest) and then divide it equally by the total number of payments.   Identify Given Variables:   Principal ( ):   Annual Interest Rate ( ):   Loan Term ( ):      Step-by-Step Calculation:     Calculate Total Accumulated Interest ( ):    The total interest accrued on the equipment purchase is .     Calculate Total Future Value Balance ( ): Combine the principal cost and interest.  The total amount to be repaid over the loan lifespan is .     Calculate Periodic Installment Payment ( ): Divide total future value by the 18 months.       Rounding to the nearest cent, each sequential monthly payment will be .       How much interest will they pay on the loan?    The absolute cost of credit (total interest expense) was calculated directly in step 1 using the simple interest formula:      Worcester State University will pay a total interest amount of over the lifespan of the financing agreement.          Congratulations! You purchase a sprawling home for $1,000,000. You make a 15% down payment and agree to a 4.5% interest rate for a 30-year fixed-rate mortgage. You are also required to pay 3 points at closing.      What is the amount of your loan?    The loan amount is determined by finding the cash value of the down payment and subtracting it from the total purchase price of the home.   Step-by-Step Calculation:     Calculate the Down Payment: Multiply the purchase price by the down payment percentage. The upfront cash down payment is .     Calculate the Principal Mortgage Amount ( ): Subtract the down payment from the total home cost.      The total principal amount of your mortgage loan is .       You paid 3 points at the closing. How much did you pay?    In real estate finance, 1 point is equal to 1% of the total amount borrowed (the mortgage loan principal), not the purchase price of the home.      The total amount paid for 3 points at closing is .       What is your monthly mortgage payment?    To determine the regular monthly installment cost, we apply the standard fixed-rate loan amortization formula.   Identify Given Variables:   Mortgage Loan Principal ( ):   Annual Interest Rate ( ):   Compounding Periods per Year ( ):  (monthly)  Total Time ( ):      Step-by-Step Calculation:     State the Installment Formula:       Evaluate the Numerator: Find the periodic monthly rate.      Evaluate the Denominator: Calculate the monthly compounding base over the lifetime total of 360 payments ( ).        Solve for PMT: Divide the numerator by the denominator.      Your base monthly mortgage payment is .       How much are you charged over the course of the mortgage loan, in interest?    The total interest expense is determined by adding up all monthly payments made over 30 years and subtracting the original amount borrowed.   Step-by-Step Calculation:     Calculate Total Lifetime Payments: Multiply the monthly payment by 360 total months. The aggregate amount paid back to the lender over 30 years is .     Subtract the Initial Principal Balance:        The total interest charged over the standard lifespan of the loan is .      "
},
{
  "id": "handout-finance-4-1",
  "level": "2",
  "url": "handout-finance.html#handout-finance-4-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  In order to pay for baseball uniforms, a school takes out a simple interest loan for $20,000 for 7 months at a rate of 12%. Find the future value of the loan.    To find the future value of a loan using a simple interest model, we extract our known variables and evaluate using the linear simple interest equation.   Identify Given Variables:   Principal ( ):   Annual Interest Rate ( ):   Time ( ):      Step-by-Step Calculation:     Calculate Accumulated Interest ( ): Multiply Principal by Rate by Time.   The total accumulated interest generated over the 7 months is .     Calculate Future Value ( ): Sum the initial principal amount and the newly accumulated interest.       The final future value of the loan at maturity is .   "
},
{
  "id": "handout-finance-5-1",
  "level": "2",
  "url": "handout-finance.html#handout-finance-5-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  What is the amount of the deposit needed if your financial goal is to save $24,000 in 3 years with a rate of 7.5% compounded semiannually ?    To find the initial deposit (present value) required to meet a future financial goal with compound interest, we rearrange the compound interest formula to solve for the principal .   Identify Given Variables:   Future Value Goal ( ):   Annual Interest Rate ( ):   Compounding Periods per Year ( ):  (semiannually)  Time ( ):      Step-by-Step Calculation:     State the Present Value Formula:       Substitute the Values: Find the interest rate per period ( ) and total number of compounding periods ( ).        Evaluate the Denominator:        Calculate the Final Principal Amount: Divide the future goal by the compounding factor and round to the nearest cent.      The initial deposit amount needed to meet your financial goal is .   "
},
{
  "id": "handout-finance-6-1",
  "level": "2",
  "url": "handout-finance.html#handout-finance-6-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Your sister has her first child and you decide to open an annuity for your baby nephew. You deposit $30 at the end of each month into an annuity that returns 2.5% annual interest.      How much will your nephew have in his annuity when he goes off to college (18 years from now)?    To find the future value of regular monthly contributions, we evaluate using the future value formula for an ordinary annuity.   Identify Given Variables:   Monthly Payment ( ):   Annual Interest Rate ( ):   Compounding Periods per Year ( ):  (monthly)  Time ( ):      Step-by-Step Calculation:     State the Annuity Future Value Formula:       Calculate Intermediate Terms: Find the monthly interest rate and the total number of deposits.       Substitute and Evaluate:           When your nephew leaves for college, the account will have accumulated .       How much interest was earned?    To determine total interest earned, we calculate your total out-of-pocket contributions over the 18 years and subtract that value from the accumulated future value.   Step-by-Step Calculation:     Calculate Total Out-of-Pocket Deposits: Multiply the monthly payment by the total number of compound periods over 18 years.  The sum of all out-of-pocket deposits is .     Calculate Total Interest Earned: Subtract total out-of-pocket deposits from the accumulated future value found in Task 1.       The total interest earned by the annuity is .    "
},
{
  "id": "handout-finance-7-1",
  "level": "2",
  "url": "handout-finance.html#handout-finance-7-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  The purchase cost of a Camry is $32,500. This vehicle can be financed by providing a $3,000 down payment and committing to monthly installment payments of $680.25 per month for 60 months.      Determine the amount financed.    The amount financed is the remaining vehicle balance that must be covered by a loan after subtracting the initial down payment from the base purchase price.      The base amount financed through the loan is .       Determine the total installment charge (total installment price).    The total installment price represents the absolute total cost of buying the car over time, found by adding the down payment to the sum of all monthly payments.   Step-by-Step Calculation:     Calculate Total Monthly Deferred Payments: Multiply the monthly commitment by the total number of payments. The sum of all monthly installments across 60 months is .     Calculate Total Out-of-Pocket Cost: Combine the monthly payments with the initial down payment.       The total installment cost for purchasing the vehicle is .       Determine the finance charge.    The finance charge represents the total interest paid for borrowing money, calculated by finding the difference between the total installment price and the original cash purchase cost.      The absolute cost of borrowing (total interest expense) is .    "
},
{
  "id": "handout-finance-8-1",
  "level": "2",
  "url": "handout-finance.html#handout-finance-8-1",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  A new fax machine costs Worcester State University $2,670. They are to pay it off in 18 months at a 9% simple interest rate .      What will each monthly payment be?    To find the monthly installment value, we first compute the total future value of the loan (principal plus interest) and then divide it equally by the total number of payments.   Identify Given Variables:   Principal ( ):   Annual Interest Rate ( ):   Loan Term ( ):      Step-by-Step Calculation:     Calculate Total Accumulated Interest ( ):    The total interest accrued on the equipment purchase is .     Calculate Total Future Value Balance ( ): Combine the principal cost and interest.  The total amount to be repaid over the loan lifespan is .     Calculate Periodic Installment Payment ( ): Divide total future value by the 18 months.       Rounding to the nearest cent, each sequential monthly payment will be .       How much interest will they pay on the loan?    The absolute cost of credit (total interest expense) was calculated directly in step 1 using the simple interest formula:      Worcester State University will pay a total interest amount of over the lifespan of the financing agreement.    "
},
{
  "id": "handout-finance-9-1",
  "level": "2",
  "url": "handout-finance.html#handout-finance-9-1",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  Congratulations! You purchase a sprawling home for $1,000,000. You make a 15% down payment and agree to a 4.5% interest rate for a 30-year fixed-rate mortgage. You are also required to pay 3 points at closing.      What is the amount of your loan?    The loan amount is determined by finding the cash value of the down payment and subtracting it from the total purchase price of the home.   Step-by-Step Calculation:     Calculate the Down Payment: Multiply the purchase price by the down payment percentage. The upfront cash down payment is .     Calculate the Principal Mortgage Amount ( ): Subtract the down payment from the total home cost.      The total principal amount of your mortgage loan is .       You paid 3 points at the closing. How much did you pay?    In real estate finance, 1 point is equal to 1% of the total amount borrowed (the mortgage loan principal), not the purchase price of the home.      The total amount paid for 3 points at closing is .       What is your monthly mortgage payment?    To determine the regular monthly installment cost, we apply the standard fixed-rate loan amortization formula.   Identify Given Variables:   Mortgage Loan Principal ( ):   Annual Interest Rate ( ):   Compounding Periods per Year ( ):  (monthly)  Total Time ( ):      Step-by-Step Calculation:     State the Installment Formula:       Evaluate the Numerator: Find the periodic monthly rate.      Evaluate the Denominator: Calculate the monthly compounding base over the lifetime total of 360 payments ( ).        Solve for PMT: Divide the numerator by the denominator.      Your base monthly mortgage payment is .       How much are you charged over the course of the mortgage loan, in interest?    The total interest expense is determined by adding up all monthly payments made over 30 years and subtracting the original amount borrowed.   Step-by-Step Calculation:     Calculate Total Lifetime Payments: Multiply the monthly payment by 360 total months. The aggregate amount paid back to the lender over 30 years is .     Subtract the Initial Principal Balance:        The total interest charged over the standard lifespan of the loan is .    "
},
{
  "id": "handout-Statistics",
  "level": "1",
  "url": "handout-Statistics.html",
  "type": "Worksheet",
  "number": "",
  "title": "Statistics Handout",
  "body": " Statistics Handout   This handout provides an overview of different voting methods, including the plurality method, plurality-with-elimination method, Borda count method, and pairwise comparison method. It also includes exercises to practice applying these methods to election scenarios.  The handout is designed to help students understand the strengths and weaknesses of each voting method and how they can lead to different outcomes in elections. By working through the exercises, students will gain a deeper understanding of how these methods work and their implications for democratic decision-making.     Data through Graphs An introduction to interpreting and creating various types of graphs, such as bar graphs, histograms, pie charts, and scatter plots, to visualize data effectively.   Measures of Center and Spread mean, median, mode, range, variance, and standard deviation are all measures that help us understand the central tendency and variability of a dataset.   The Empirical Rule A rule that describes the distribution of data in a normal distribution, stating that approximately 68% of the data falls within one standard deviation of the mean, 95% within two standard deviations, and 99.7% within three standard deviations.   z-scores Standardized scores that indicate how many standard deviations a data point is from the mean.   Regression A statistical method for modeling the relationship between a dependent variable and one or more independent variables, often used for prediction and understanding the strength of relationships between variables.     Exercises and Workspaces: Real-World Applications     Data Representation: Daily Text Messages Sent   The following dataset represents the number of text messages sent by high school students during a single day:  40, 20, 20, 50, 30, 30, 60, 20, 30, 40, 30, 10, 40, 50, 40, 30, 30, 40, 40, 50, 60, 20, 50, 60, 10    Complete a frequency table for the text message counts.  Construct a bar graph of the data.  Construct a line graph of the data.  Construct a pie chart of the data.  Construct a histogram of the data using 10-point class intervals.        (a) Frequency Table: Sorting and counting each distinct message count yields the following frequency distribution:   Frequency Distribution of Daily Text Messages    Texts Sent  Frequency (Students)   10 2  20 4  30 6  40 6  50 4  60 3      (b) Bar Graph: We represent each distinct count value on the horizontal axis and its corresponding frequency on the vertical axis using separated columns:   Bar Graph of Daily Texts Sent   A vertical bar chart showing text message totals on the horizontal axis and student frequency counts on the vertical axis.       (c) Line Graph: Using coordinates, data markers are mapped out across consecutive value junctions and tied together using path lines:   Line Graph of Daily Texts Sent   A line graph mapping distinct text count marks to the final number of tracking students.       (d) Pie Chart: Proportional distributions are evaluated based on a complete baseline of students using degree equations:    10 Texts: 8.00 percent (28.8 degrees)  20 Texts: 16.00 percent (57.6 degrees)  30 Texts: 24.00 percent (86.4 degrees)  40 Texts: 24.00 percent (86.4 degrees)  50 Texts: 16.00 percent (57.6 degrees)  60 Texts: 12.00 percent (43.2 degrees)     Pie Chart of Text Message Distributions   A pie chart dividing the student text distribution into categorical value sectors.       (e) Histogram: Grouping values into 10-point bins maps the dataset across continuous quantitative intervals, which forces columns to display directly side-by-side:    [5, 15): 2 students (values of 10)  [15, 25): 4 students (values of 20)  [25, 35): 6 students (values of 30)  [35, 45): 6 students (values of 40)  [45, 55): 4 students (values of 50)  [55, 65]: 3 students (values of 60)     Histogram of Text Message Distributions   A histogram displaying the continuous interval distribution of text message frequencies.           Employee Commute Times   A small company tracks the daily one-way commute times (measured in minutes) for a random sample of employees. The collected data values are listed below:  25, 40, 15, 30, 25, 20, 45, 25, 60  Calculate the following four summary metrics for this data set:  The arithmetic mean commute time.  The median commute time.  The mode of the dataset.  The total range of the commute times.        (a) Mean: To find the mean, sum all the data points together and divide by the total number of observations ( ):       (b) Median: To determine the median, first arrange the data points in ascending numerical order:  15, 20, 25, 25, 25 , 30, 40, 45, 60  Since there is an odd number of scores ( ), the median is the exact middle element located at position . The fifth value is minutes.    (c) Mode: The mode is the specific data value that shows up most frequently in the sample. In this ordered list, the value appears three times, while every other number appears only once. Therefore, the mode is minutes.    (d) Range: The range is the absolute difference between the absolute highest value (maximum) and the lowest value (minimum) in the dataset:       Dot Plot of Employee Commute Times   A simple dot plot showing employee commute times on the horizontal axis with repeated stacked dots showing the high frequency at 25 minutes.           Female Height Distribution   Adult female heights in North America are approximately normally distributed with a mean of inches and a standard deviation of inches.  Use the Empirical Rule (68-95-99.7 Rule) to answer the following questions:  Approximately what percentage of women have heights between 61.5 inches and 68.5 inches?  Approximately 95 percent of women have heights between what two values?  Approximately what percentage of women have heights greater than 72 inches?  Approximately what percentage of women have heights between 58 inches and 65 inches?       1. Heights between 61.5 and 68.5 inches: The values 61.5 and 68.5 are found by subtracting and adding one standard deviation to the mean: and . This range represents exactly 1 standard deviation from the mean ( ) standard deviations. According to the Empirical Rule, approximately 68 percent of the distribution falls within this range.   2. Range covering 95 percent of women: The Empirical Rule states that approximately 95 percent of data falls within 2 standard deviations of the (mean sd). Calculating these boundaries:  Therefore, 95 percent of women have heights between 58 inches and 72 inches .   3. Percentage greater than 72 inches: A height of 72 inches sits exactly 2 standard deviations above the mean. Since 95 percent of women fall within 2 standard deviations (between 58 and 72 inches), the remaining 5 percent falls outside this span. Because the normal curve is perfectly symmetrical, half of that remainder is in the lower tail and half is in the upper tail. Dividing this gives  2.5 percent .   4. Percentage between 58 and 65 inches: The value of 58 inches is exactly 2 standard deviations below the mean, while 65 inches is the mean itself. Since 95 percent of the data falls symmetrically within 2 standard deviations of the mean, the section from the lower boundary up to the center mean point represents exactly half of that cluster. Calculating this gives  47.5 percent .   Normal Distribution Curve for Female Heights   A bell-shaped normal distribution curve centered at 65 inches, showing standard deviation marking lines at 54.5, 58, 61.5, 65, 68.5, 72, and 75.5 inches.           Calculating Z-Scores-1   On a standardized certification exam, the mean score is with a standard deviation of . Determine the z-score for an examinee who scored an .     This student scored standard deviations above the population average.     Calculating Z-Scores-2   A track-and-field sprint group has a mean race completion time of seconds with a standard deviation of seconds. What is the z-score for a runner who completes the race in seconds?     The runner's time is standard deviations faster (below) than the group average.     Comparing Z-Scores-3   An industrial lighting brand has a mean runtime life of hours with a standard deviation of hours. Find the specific operational lifespan that corresponds to a z-score of .              Negative Correlation: Car Mileage and Resale Value   A used car dealership wants to examine the relationship between a specific sedan's odometer mileage ( , measured in thousands of miles) and its current market resale value ( , measured in thousands of dollars). The data collected from a sample of five vehicles is presented below.    Vehicle Mileage vs. Resale Value    Vehicle  Mileage ( in thousands of miles)  Resale Value ( in thousands of dollars)   1 10 35  2 20 29  3 30 26  4 40 20  5 50 14    Using the simple linear regression model calculated from the observed data table above, predict the total market resale value of a sedan if its odometer reaches thousand miles (i.e., ).      $15.5 thousand dollars   Incorrect. This value fails to capture the continuous decline in value, overestimating how much the car is worth at 60 thousand miles.     $9.5 thousand dollars   Correct! Observe the downward trend in the data points and plug the value directly into the line equation to find .     $5.0 thousand dollars   Incorrect. While the vehicle loses value consistently, it has not depreciated this drastically according to the linear model.     $2.1 thousand dollars   Incorrect. This underestimation assumes an exponential drop-off rather than a steady simple linear progression rate.      To predict the resale value of the vehicle at 60 thousand miles, we first graph the data points from the table and calculate the line of best fit using linear regression.     Scatter Plot of Mileage vs. Resale Value   A scatter plot showing a downward trend of resale value as mileage increases, with a red regression line and labeled data points.         "
},
{
  "id": "exercise-text-message-counts",
  "level": "2",
  "url": "handout-Statistics.html#exercise-text-message-counts",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Data Representation: Daily Text Messages Sent.",
  "body": " Data Representation: Daily Text Messages Sent   The following dataset represents the number of text messages sent by high school students during a single day:  40, 20, 20, 50, 30, 30, 60, 20, 30, 40, 30, 10, 40, 50, 40, 30, 30, 40, 40, 50, 60, 20, 50, 60, 10    Complete a frequency table for the text message counts.  Construct a bar graph of the data.  Construct a line graph of the data.  Construct a pie chart of the data.  Construct a histogram of the data using 10-point class intervals.        (a) Frequency Table: Sorting and counting each distinct message count yields the following frequency distribution:   Frequency Distribution of Daily Text Messages    Texts Sent  Frequency (Students)   10 2  20 4  30 6  40 6  50 4  60 3      (b) Bar Graph: We represent each distinct count value on the horizontal axis and its corresponding frequency on the vertical axis using separated columns:   Bar Graph of Daily Texts Sent   A vertical bar chart showing text message totals on the horizontal axis and student frequency counts on the vertical axis.       (c) Line Graph: Using coordinates, data markers are mapped out across consecutive value junctions and tied together using path lines:   Line Graph of Daily Texts Sent   A line graph mapping distinct text count marks to the final number of tracking students.       (d) Pie Chart: Proportional distributions are evaluated based on a complete baseline of students using degree equations:    10 Texts: 8.00 percent (28.8 degrees)  20 Texts: 16.00 percent (57.6 degrees)  30 Texts: 24.00 percent (86.4 degrees)  40 Texts: 24.00 percent (86.4 degrees)  50 Texts: 16.00 percent (57.6 degrees)  60 Texts: 12.00 percent (43.2 degrees)     Pie Chart of Text Message Distributions   A pie chart dividing the student text distribution into categorical value sectors.       (e) Histogram: Grouping values into 10-point bins maps the dataset across continuous quantitative intervals, which forces columns to display directly side-by-side:    [5, 15): 2 students (values of 10)  [15, 25): 4 students (values of 20)  [25, 35): 6 students (values of 30)  [35, 45): 6 students (values of 40)  [45, 55): 4 students (values of 50)  [55, 65]: 3 students (values of 60)     Histogram of Text Message Distributions   A histogram displaying the continuous interval distribution of text message frequencies.      "
},
{
  "id": "exercise-central-tendency-quiz",
  "level": "2",
  "url": "handout-Statistics.html#exercise-central-tendency-quiz",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Employee Commute Times.",
  "body": " Employee Commute Times   A small company tracks the daily one-way commute times (measured in minutes) for a random sample of employees. The collected data values are listed below:  25, 40, 15, 30, 25, 20, 45, 25, 60  Calculate the following four summary metrics for this data set:  The arithmetic mean commute time.  The median commute time.  The mode of the dataset.  The total range of the commute times.        (a) Mean: To find the mean, sum all the data points together and divide by the total number of observations ( ):       (b) Median: To determine the median, first arrange the data points in ascending numerical order:  15, 20, 25, 25, 25 , 30, 40, 45, 60  Since there is an odd number of scores ( ), the median is the exact middle element located at position . The fifth value is minutes.    (c) Mode: The mode is the specific data value that shows up most frequently in the sample. In this ordered list, the value appears three times, while every other number appears only once. Therefore, the mode is minutes.    (d) Range: The range is the absolute difference between the absolute highest value (maximum) and the lowest value (minimum) in the dataset:       Dot Plot of Employee Commute Times   A simple dot plot showing employee commute times on the horizontal axis with repeated stacked dots showing the high frequency at 25 minutes.      "
},
{
  "id": "exercise-female-height-empirical-rule",
  "level": "2",
  "url": "handout-Statistics.html#exercise-female-height-empirical-rule",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Female Height Distribution.",
  "body": " Female Height Distribution   Adult female heights in North America are approximately normally distributed with a mean of inches and a standard deviation of inches.  Use the Empirical Rule (68-95-99.7 Rule) to answer the following questions:  Approximately what percentage of women have heights between 61.5 inches and 68.5 inches?  Approximately 95 percent of women have heights between what two values?  Approximately what percentage of women have heights greater than 72 inches?  Approximately what percentage of women have heights between 58 inches and 65 inches?       1. Heights between 61.5 and 68.5 inches: The values 61.5 and 68.5 are found by subtracting and adding one standard deviation to the mean: and . This range represents exactly 1 standard deviation from the mean ( ) standard deviations. According to the Empirical Rule, approximately 68 percent of the distribution falls within this range.   2. Range covering 95 percent of women: The Empirical Rule states that approximately 95 percent of data falls within 2 standard deviations of the (mean sd). Calculating these boundaries:  Therefore, 95 percent of women have heights between 58 inches and 72 inches .   3. Percentage greater than 72 inches: A height of 72 inches sits exactly 2 standard deviations above the mean. Since 95 percent of women fall within 2 standard deviations (between 58 and 72 inches), the remaining 5 percent falls outside this span. Because the normal curve is perfectly symmetrical, half of that remainder is in the lower tail and half is in the upper tail. Dividing this gives  2.5 percent .   4. Percentage between 58 and 65 inches: The value of 58 inches is exactly 2 standard deviations below the mean, while 65 inches is the mean itself. Since 95 percent of the data falls symmetrically within 2 standard deviations of the mean, the section from the lower boundary up to the center mean point represents exactly half of that cluster. Calculating this gives  47.5 percent .   Normal Distribution Curve for Female Heights   A bell-shaped normal distribution curve centered at 65 inches, showing standard deviation marking lines at 54.5, 58, 61.5, 65, 68.5, 72, and 75.5 inches.      "
},
{
  "id": "handout-Statistics-7-1",
  "level": "2",
  "url": "handout-Statistics.html#handout-Statistics-7-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Calculating Z-Scores-1.",
  "body": " Calculating Z-Scores-1   On a standardized certification exam, the mean score is with a standard deviation of . Determine the z-score for an examinee who scored an .     This student scored standard deviations above the population average.   "
},
{
  "id": "handout-Statistics-7-2",
  "level": "2",
  "url": "handout-Statistics.html#handout-Statistics-7-2",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Calculating Z-Scores-2.",
  "body": " Calculating Z-Scores-2   A track-and-field sprint group has a mean race completion time of seconds with a standard deviation of seconds. What is the z-score for a runner who completes the race in seconds?     The runner's time is standard deviations faster (below) than the group average.   "
},
{
  "id": "handout-Statistics-7-3",
  "level": "2",
  "url": "handout-Statistics.html#handout-Statistics-7-3",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "Comparing Z-Scores-3.",
  "body": " Comparing Z-Scores-3   An industrial lighting brand has a mean runtime life of hours with a standard deviation of hours. Find the specific operational lifespan that corresponds to a z-score of .         "
},
{
  "id": "exercise-car-mileage-prediction",
  "level": "2",
  "url": "handout-Statistics.html#exercise-car-mileage-prediction",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "Negative Correlation: Car Mileage and Resale Value.",
  "body": " Negative Correlation: Car Mileage and Resale Value   A used car dealership wants to examine the relationship between a specific sedan's odometer mileage ( , measured in thousands of miles) and its current market resale value ( , measured in thousands of dollars). The data collected from a sample of five vehicles is presented below.    Vehicle Mileage vs. Resale Value    Vehicle  Mileage ( in thousands of miles)  Resale Value ( in thousands of dollars)   1 10 35  2 20 29  3 30 26  4 40 20  5 50 14    Using the simple linear regression model calculated from the observed data table above, predict the total market resale value of a sedan if its odometer reaches thousand miles (i.e., ).      $15.5 thousand dollars   Incorrect. This value fails to capture the continuous decline in value, overestimating how much the car is worth at 60 thousand miles.     $9.5 thousand dollars   Correct! Observe the downward trend in the data points and plug the value directly into the line equation to find .     $5.0 thousand dollars   Incorrect. While the vehicle loses value consistently, it has not depreciated this drastically according to the linear model.     $2.1 thousand dollars   Incorrect. This underestimation assumes an exponential drop-off rather than a steady simple linear progression rate.      To predict the resale value of the vehicle at 60 thousand miles, we first graph the data points from the table and calculate the line of best fit using linear regression.     Scatter Plot of Mileage vs. Resale Value   A scatter plot showing a downward trend of resale value as mileage increases, with a red regression line and labeled data points.       "
},
{
  "id": "activity-01-intro-activity",
  "level": "1",
  "url": "activity-01-intro-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "01. Activity Voting Methods",
  "body": " 01. Activity Voting Methods    In many decision making situations, it is necessary to gather the group consensus using some sort of vote. While the basic idea of voting is fairly universal, the method by which those votes are used to determine a winner can vary. In deciding upon a winner, there is always one main goal: to reflect the preferences of the people in the most fair way possible. We will discuss four different methods for determining the winner of an election using preference ballots, and will see that we can sometimes have different winners under different methods of voting.   See for the voting notes.                                    We have seen four different methods for determining the winner of an election. Through our examples and problems, we have also seen that these different methods can lead to different winners! In particular, in the Math Club President election considered throughout the exercises, it turns out that each of the four voting methods leads to each of the four candidates being declared the winner!       "
},
{
  "id": "activity-01-intro-activity-4-1",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-4-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  "
},
{
  "id": "activity-01-intro-activity-5-1",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-5-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  "
},
{
  "id": "activity-01-intro-activity-6-1",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-6-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  "
},
{
  "id": "activity-01-intro-activity-7-1",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-7-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  "
},
{
  "id": "activity-01-intro-activity-8-1",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-8-1",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  "
},
{
  "id": "activity-01-intro-activity-9-1",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-9-1",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  "
},
{
  "id": "activity-01-intro-activity-10-1",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-10-1",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "  We have seen four different methods for determining the winner of an election. Through our examples and problems, we have also seen that these different methods can lead to different winners! In particular, in the Math Club President election considered throughout the exercises, it turns out that each of the four voting methods leads to each of the four candidates being declared the winner!    "
},
{
  "id": "activity-02-intro-activity",
  "level": "1",
  "url": "activity-02-intro-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "02. Activity Apportionment Methods",
  "body": " 02. Activity Apportionment Methods     Apportionment is the problem of dividing up a fixed number of things among groups of different sizes. In politics, this takes the form of allocating a limited number of representatives amongst voters. This problem, presumably, is older than the United States, but the best-known ways to solve it have their origins in the problem of assigning each state an appropriate number of representatives in the new Congress when the country was formed. Apportionment theory is also used in many non-political situations, such as staffing a hospital with the appropriate number of nurses per shift and allocating buses to cover a set of bus routes based on the number of passengers.  The goal with any apportionment problem is to find a way to fairly distribute the items (e.g., doctors, buses, instructors) amoung the groups (e.g., clinics, routes, courses).  We face several real-world restrictions in this distribution process:    The things being divided up can exist only in whole numbers.    We must use all of the things being divided up, and we cannot use any more.    Each group must get at least one of the things being divided up.    The number of things assigned to each group should be at least approximately proportional to the population of the group. (Exact proportionality isn't possible because of the whole number requirement, but we should try to be close, and in any case, if Group A is larger than Group B, then Group B shouldn't get more of the things than Group A does.)    In terms of the apportionment of the United States House of Representatives, these rules imply:     We can only have whole representatives. Massachusetts can't have 8.4 representatives.    We can only use the (currently) 435 representatives available. If one state gets another representative, another state has to lose one.    Every state gets at least one representative.    The number of representatives each state gets should be approximately proportional to the state population. This way, the number of constituents each representative has should be approximately equal.     There are many different methods for solving an apportionment problem. In this course, we will discuss three of them: Hamilton's method, Jefferson's method, and Adams method. The first step for each method will be to compute the standard divisor and standard quotas.   See for the apportionment notes.       Which of the following scenarios illustrates an apportionment problem? Select ALL that apply!    A daycare must distribute 100 toys among 5 rooms based on the number of children in each room.  The WSU Math Club needs to elect a president and will do so by selecting the candidate with the most votes.  A school system purchases 500 new computers and must distribute them among 8 elementary schools based on the number of students at each school.  Four people pool their money to buy 60 shares of a stock, and the shares are distributed among the four based on the amount each person contributes.           Which of the following apportionment methods will we discuss in this course? Select all that apply!    Pairwise comparison method  Plurality with elimination method  Plurality method  Hamilton's method  Jefferson's method  Borda count method  Adam's Method            Standard Divisor and Standard Quotas  An HMO has 40 doctors to be apportioned among four clinics (A, B, C, D). The HMO decides to apportion the doctors based on the average weekly patient load for each clinic, shown in the table below. Find the standard divisor and the standard quota for each clinic. Round all answers, including the standard divisor, to two decimal places.  Standard divisor = ____________  Standard quota for Clinic A = ____________  Standard quota for Clinic B = ____________  Standard quota for Clinic C = ____________  Standard quota for Clinic D = ____________         Hamilton's Method  An HMO has 40 doctors to be apportioned among four clinics (A, B, C, D). The HMO decides to apportion the doctors based on the average weekly patient load for each clinic, shown in the table below. Use Hamilton's method to apportion the doctors to the clinics.  Recall the standard divisor for this problem is 50.05.  Total doctors for Clinic A = ____________  Total doctors for Clinic B = ____________  Total doctors for Clinic C = ____________  Total doctors for Clinic D = ____________         Jefferson's Method  An HMO has 40 doctors to be apportioned among four clinics (A, B, C, D). The HMO decides to apportion the doctors based on the average weekly patient load for each clinic, shown in the table below. Use Jefferson's method to apportion the doctors to the clinics.  Recall the standard divisor for this problem is 50.05.  Total doctors for Clinic A = ____________  Total doctors for Clinic B = ____________  Total doctors for Clinic C = ____________  Total doctors for Clinic D = ____________         Adam's Method  An HMO has 40 doctors to be apportioned among four clinics (A, B, C, D). The HMO decides to apportion the doctors based on the average weekly patient load for each clinic, shown in the table below. Use Adams's method to apportion the doctors to the clinics.  Recall the standard divisor for this problem is 50.05.  Total doctors for Clinic A = ____________  Total doctors for Clinic B = ____________  Total doctors for Clinic C = ____________  Total doctors for Clinic D = ____________       "
},
{
  "id": "activity-02-intro-activity-3-1",
  "level": "2",
  "url": "activity-02-intro-activity.html#activity-02-intro-activity-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Which of the following scenarios illustrates an apportionment problem? Select ALL that apply!    A daycare must distribute 100 toys among 5 rooms based on the number of children in each room.  The WSU Math Club needs to elect a president and will do so by selecting the candidate with the most votes.  A school system purchases 500 new computers and must distribute them among 8 elementary schools based on the number of students at each school.  Four people pool their money to buy 60 shares of a stock, and the shares are distributed among the four based on the amount each person contributes.      "
},
{
  "id": "activity-02-intro-activity-4-1",
  "level": "2",
  "url": "activity-02-intro-activity.html#activity-02-intro-activity-4-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Which of the following apportionment methods will we discuss in this course? Select all that apply!    Pairwise comparison method  Plurality with elimination method  Plurality method  Hamilton's method  Jefferson's method  Borda count method  Adam's Method      "
},
{
  "id": "activity-02-intro-activity-5-1",
  "level": "2",
  "url": "activity-02-intro-activity.html#activity-02-intro-activity-5-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Standard Divisor and Standard Quotas  An HMO has 40 doctors to be apportioned among four clinics (A, B, C, D). The HMO decides to apportion the doctors based on the average weekly patient load for each clinic, shown in the table below. Find the standard divisor and the standard quota for each clinic. Round all answers, including the standard divisor, to two decimal places.  Standard divisor = ____________  Standard quota for Clinic A = ____________  Standard quota for Clinic B = ____________  Standard quota for Clinic C = ____________  Standard quota for Clinic D = ____________    "
},
{
  "id": "activity-02-intro-activity-6-1",
  "level": "2",
  "url": "activity-02-intro-activity.html#activity-02-intro-activity-6-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Hamilton's Method  An HMO has 40 doctors to be apportioned among four clinics (A, B, C, D). The HMO decides to apportion the doctors based on the average weekly patient load for each clinic, shown in the table below. Use Hamilton's method to apportion the doctors to the clinics.  Recall the standard divisor for this problem is 50.05.  Total doctors for Clinic A = ____________  Total doctors for Clinic B = ____________  Total doctors for Clinic C = ____________  Total doctors for Clinic D = ____________    "
},
{
  "id": "activity-02-intro-activity-7-1",
  "level": "2",
  "url": "activity-02-intro-activity.html#activity-02-intro-activity-7-1",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Jefferson's Method  An HMO has 40 doctors to be apportioned among four clinics (A, B, C, D). The HMO decides to apportion the doctors based on the average weekly patient load for each clinic, shown in the table below. Use Jefferson's method to apportion the doctors to the clinics.  Recall the standard divisor for this problem is 50.05.  Total doctors for Clinic A = ____________  Total doctors for Clinic B = ____________  Total doctors for Clinic C = ____________  Total doctors for Clinic D = ____________    "
},
{
  "id": "activity-02-intro-activity-8-1",
  "level": "2",
  "url": "activity-02-intro-activity.html#activity-02-intro-activity-8-1",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  Adam's Method  An HMO has 40 doctors to be apportioned among four clinics (A, B, C, D). The HMO decides to apportion the doctors based on the average weekly patient load for each clinic, shown in the table below. Use Adams's method to apportion the doctors to the clinics.  Recall the standard divisor for this problem is 50.05.  Total doctors for Clinic A = ____________  Total doctors for Clinic B = ____________  Total doctors for Clinic C = ____________  Total doctors for Clinic D = ____________    "
},
{
  "id": "activity-03-intro-activity",
  "level": "1",
  "url": "activity-03-intro-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "03. Activity Simple Interest",
  "body": " 03. Activity Simple Interest     We have to work with money every day. While balancing your checkbook or calculating your monthly expenditures on coffee requires only arithmetic, when we start saving, planning for retirement, or need a loan, we need more mathematics!  See for the simple interest notes.   Discussing interest starts with the principal, which is the amount your account starts with. This could be a starting investment or the starting amount of a loan. Interest is the amount earned for depositing money or the amount paid for borrowing money. It is calculated as a percentage of the principal (called the interest rate) and is written as a decimal (for example, is ).  For a simple example, if you borrowed from a friend and agreed to repay it with interest, then the amount of interest you would pay would just be of : . The total amount you would repay would be , which is the original principal plus the interest. This is an example of one-time simple interest, where the interest is calculated based on the principal only.        One-time simple interest is only common for extremely short-term loans. For longer-term loans, it is common for interest to be paid on a daily, monthly, quarterly, or annual basis. In that case, interest would be earned regularly. For example, bonds are essentially a loan made to the bond issuer (a company or government) by you, the bondholder. In return for the loan, the issuer agrees to pay interest, often annually. Bonds have a maturity date, at which time the issuer pays back the original bond value.    Suppose your city is building a new park, and issues bonds to raise the money to build it. You obtain a bond that pays interest annually that matures in years. How much interest will you earn?    Each year you would earn interest: . So, over the course of five years, you would earn a total of . When the bond matures, you would receive back the you originally paid, leaving you with a total of .    Notice how the amount of interest ( ) was computed in this example: we multiplied the principal by the interest rate (represented as a decimal), then multiplied this by the number of years. We can generalize this idea of simple interest over time to obtain a formula that we can use to find the amount of simple interest earned: where:  is the amount of simple interest  is the principal (starting amount)  is the interest rate represented as a decimal  is the time in years     You do NOT need to memorize this formula! It will be provided for you on all quizzes and exams!   Let's look at a quick example demonstrating the simple interest formula.    A student took out a simple interest loan for for years at a rate of to purchase a used car. What is the interest on the loan?    We are given the following: , , and . Using the simple interest formula, the amount of interest on the loan is:             -->  While finding the amount of interest accrued for a loan is important, it is perhaps more important that we determine the total amount that must be repaid. We will call this amount — that is, the total amount required to be repaid in a loan or the total amount earned in an investment — the future value . We will denote this quantity with the variable .  As we saw with the example on the previous page involving a city issuing bonds to build a new park, the future value of a loan can be found by adding together the principal and the interest. This is true for an investment as well. This will allow us to develop a formula for the future value involving simple interest: Since , we can substitute this into the equation to get: This short calculation provides us with a formula for computing the future value for a simple interest loan or investment: where:  is the future value of the loan or investment  is the principal (starting amount) of the loan or investment  is the interest rate represented as a decimal  is the time in years     You do NOT need to memorize this formula! It will be provided for you on all quizzes and exams!   Let's look at a quick example demonstrating the simple interest formula.    A loan of has been made at for months. Find the loan’s future value.    We are given the following: and .  For , note that we are given a time in months, not years! For the simple interest formula to be used correctly, we must give this value in years. Since there are months in a year, we can always convert from months to years by dividing the number of months by . In this case, we have:   Now, using the formula above we find a future value of:                  In addition to determining the future value for a simple interest loan or investment, the simple interest formula can be used to solve other types of problems. We might want to know how much we should deposit into an account with a given simple interest rate to ensure we have a given amount in the future. Or, like in the example below, we might want to determine the simple interest rate based on the principal and future values.    You borrow from a friend and promise to pay back in months. What simple interest rate will you pay?    We are given the following: , , and years.  We are looking to find the value of (hence, the \"?\"). We substitute the given values into the simple interest formula and solve for :    Divide both sides by : Subtract from both sides: Divide by :   Since , we convert this to a percent to get a simple interest rate of .         "
},
{
  "id": "activity-03-intro-activity-2-4",
  "level": "2",
  "url": "activity-03-intro-activity.html#activity-03-intro-activity-2-4",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  "
},
{
  "id": "activity-03-intro-activity-3-2",
  "level": "2",
  "url": "activity-03-intro-activity.html#activity-03-intro-activity-3-2",
  "type": "Example",
  "number": "6.1",
  "title": "",
  "body": "  Suppose your city is building a new park, and issues bonds to raise the money to build it. You obtain a bond that pays interest annually that matures in years. How much interest will you earn?    Each year you would earn interest: . So, over the course of five years, you would earn a total of . When the bond matures, you would receive back the you originally paid, leaving you with a total of .   "
},
{
  "id": "activity-03-intro-activity-3-4",
  "level": "2",
  "url": "activity-03-intro-activity.html#activity-03-intro-activity-3-4",
  "type": "Note",
  "number": "6.2",
  "title": "",
  "body": " You do NOT need to memorize this formula! It will be provided for you on all quizzes and exams!  "
},
{
  "id": "activity-03-intro-activity-3-6",
  "level": "2",
  "url": "activity-03-intro-activity.html#activity-03-intro-activity-3-6",
  "type": "Example",
  "number": "6.3",
  "title": "",
  "body": "  A student took out a simple interest loan for for years at a rate of to purchase a used car. What is the interest on the loan?    We are given the following: , , and . Using the simple interest formula, the amount of interest on the loan is:    "
},
{
  "id": "activity-03-intro-activity-4-1",
  "level": "2",
  "url": "activity-03-intro-activity.html#activity-03-intro-activity-4-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  "
},
{
  "id": "activity-03-intro-activity-4-2",
  "level": "2",
  "url": "activity-03-intro-activity.html#activity-03-intro-activity-4-2",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  "
},
{
  "id": "activity-03-intro-activity-5-1",
  "level": "2",
  "url": "activity-03-intro-activity.html#activity-03-intro-activity-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "future value "
},
{
  "id": "activity-03-intro-activity-5-3",
  "level": "2",
  "url": "activity-03-intro-activity.html#activity-03-intro-activity-5-3",
  "type": "Note",
  "number": "6.4",
  "title": "",
  "body": " You do NOT need to memorize this formula! It will be provided for you on all quizzes and exams!  "
},
{
  "id": "activity-03-intro-activity-5-5",
  "level": "2",
  "url": "activity-03-intro-activity.html#activity-03-intro-activity-5-5",
  "type": "Example",
  "number": "6.5",
  "title": "",
  "body": "  A loan of has been made at for months. Find the loan’s future value.    We are given the following: and .  For , note that we are given a time in months, not years! For the simple interest formula to be used correctly, we must give this value in years. Since there are months in a year, we can always convert from months to years by dividing the number of months by . In this case, we have:   Now, using the formula above we find a future value of:    "
},
{
  "id": "activity-03-intro-activity-6-1",
  "level": "2",
  "url": "activity-03-intro-activity.html#activity-03-intro-activity-6-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  "
},
{
  "id": "activity-03-intro-activity-6-2",
  "level": "2",
  "url": "activity-03-intro-activity.html#activity-03-intro-activity-6-2",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  "
},
{
  "id": "activity-03-intro-activity-6-3",
  "level": "2",
  "url": "activity-03-intro-activity.html#activity-03-intro-activity-6-3",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  "
},
{
  "id": "activity-03-intro-activity-7-2",
  "level": "2",
  "url": "activity-03-intro-activity.html#activity-03-intro-activity-7-2",
  "type": "Example",
  "number": "6.6",
  "title": "",
  "body": "  You borrow from a friend and promise to pay back in months. What simple interest rate will you pay?    We are given the following: , , and years.  We are looking to find the value of (hence, the \"?\"). We substitute the given values into the simple interest formula and solve for :    Divide both sides by : Subtract from both sides: Divide by :   Since , we convert this to a percent to get a simple interest rate of .   "
},
{
  "id": "activity-03-intro-activity-7-3",
  "level": "2",
  "url": "activity-03-intro-activity.html#activity-03-intro-activity-7-3",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "  "
},
{
  "id": "activity-04-intro-activity",
  "level": "1",
  "url": "activity-04-intro-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "04. Activity Compound Interest",
  "body": " 04. Activity Compound Interest     With simple interest, we were assuming that we pocketed the interest when we received it. In a standard bank account, any interest we earn is automatically added to our balance, and we earn interest on that interest in future years. This reinvestment of interest is called compounding .  See for the compound interest notes.   Suppose that we deposit in a bank account offering simple interest. After year, the account would have a balance of .  Now, suppose that we deposit our in a bank account offering interest, compounded monthly. How will our money grow?  In the first month (note we use so that time is given in years!): In the first month, we will earn in interest, raising our account balance to .  In the second month: Notice that in the second month we earned more interest than we did in the first month. This is because we earned interest not only on the original we deposited, but we also earned interest on the of interest we earned the first month. This is the key advantage that compounding of interest gives us.  Calculating out a few more months, we obtain the following:    Month  Starting Balance  Interest Earned  Ending Balance    1  $1,000.00  $10.00  $1,010.00    2  $1,010.00  $10.10  $1,020.10    3  $1,020.10  $10.20  $1,030.30    4  $1,030.30  $10.30  $1,040.60    5  $1,040.60  $10.41  $1,051.01    6  $1,051.01  $10.51  $1,061.52    7  $1,061.52  $10.62  $1,072.14    8  $1,072.14  $10.72  $1,082.86    9  $1,082.86  $10.83  $1,093.69    10  $1,093.69  $10.94  $1,104.63    11  $1,104.63  $11.05  $1,115.68    12  $1,115.68  $11.16  $1,126.84    Notice that we earned slightly more interest with compound interest than with simple interest.          The calculation on the previous page was quite tedious! Fortunately, there are formulas that can be used to help us determine the future value of a loan or investment that undergoes compound interest and solve other problems relating to compound interest!  There are two formulas we will consider in this course. Both are mathematically equivalent, but are solved in terms of different values for our convenience.  where:  is the principal (starting amount) of the loan or investment, sometimes called the present value.  is the future value of the loan or investment.  is the interest rate represented as a decimal.  is the number of compounding periods per year.  is the time in years.     You do NOT need to memorize this formula! It will be provided for you on all quizzes and exams!   The first formula (the one with on the left-hand side) is called the future value formula since it is solved for the future value. It should be used when we want to determine the future value of a loan or investment with a given present value.  The second formula (the one with on the left-hand side) is called the present value formula since it is solved for the present value (principal). It should be used when we want to determine the present value of a loan or investment with a given future value.  The new quantity here that was not present before is , the number of compounding periods per year. This will need to be given to us, and is often done so using keywords. Some examples of these are:  If the compounding is done annually (once a year), then .  If the compounding is done semi-annually, then .  If the compounding is done quarterly, then .  If the compounding is done monthly, then .  If the compounding is done weekly, then .  If the compounding is done daily, then .    The most important thing to remember about using these formulas is that it assumes that we put money in the account once and let it sit there earning interest. An account where we make regular deposits is called an annuity , and will be discussed in our next unit! We look at some examples of using these formulas on the next page!              A certificate of deposit (CD) is a savings instrument that many banks offer. It usually gives a higher interest rate, but you cannot access your investment for a specified amount of time. Suppose you deposit in a CD paying interest compounded monthly. How much will you have in the account after years? How much interest was earned?    We are given the following values:  (the initial deposit)  (the interest rate as a decimal)  (interest is compounded monthly)  (we're looking for the amount after 20 years)    We are asked to find the value in the account in the future (i.e., the future value), so we use the future value formula for compound interest:     To find the amount of interest earned, we observe that everything in the account other than the initial deposit must be interest! Since we deposited and ended up with , the amount of interest earned must be:   Note that we did NOT use the formula here to compute the amount of interest earned. This formula applies only to situations which use simple interest. If we used it here, we would not have calculated the correct amount of interest.           A new mother knows she will need for her child’s education in years. If the account earns compounded quarterly, how much should the mother deposit now to reach her goal? How much interest is earned?    We are given the following values:  (the amount we want in 18 years)  (the interest rate as a decimal)  (interest is compounded quarterly)  (we're given the timeframe of 18 years)    We are asked to find the amount that needs to be deposited today (i.e., the present value), so we use the present value formula for compound interest:     To find the amount of interest earned, we observe that everything in the account other than the initial deposit must be interest! Since we deposited and ended up with , the amount of interest earned must be:   Again, note we did NOT use the formula to compute the amount of interest earned. This formula should be used only in situations in which simple interest is being used.         The effective annual yield (or effective rate) of an account is the simple interest rate that would produce the same account balance after one year as the compound interest at a stated rate and compounding period. The effective annual yield is determined by the following formula: where:  is the effective annual yield  is the compound interest rate represented as a decimal  is the number of compounding periods per year     You do NOT need to memorize this formula! It will be provided for you on all quizzes and exams!   Let's look at an example!    Sue deposits in an account that pays interest compounded monthly. Find the account’s effective annual yield.    We are given and (monthly compounding). Using the formula we see that:   This means that if we were to deposit in an account using a simple interest rate of , we would have the same balance after one year as the account with monthly compounding at .        "
},
{
  "id": "activity-04-intro-activity-3-1",
  "level": "2",
  "url": "activity-04-intro-activity.html#activity-04-intro-activity-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  "
},
{
  "id": "activity-04-intro-activity-4-3",
  "level": "2",
  "url": "activity-04-intro-activity.html#activity-04-intro-activity-4-3",
  "type": "Note",
  "number": "6.7",
  "title": "",
  "body": " You do NOT need to memorize this formula! It will be provided for you on all quizzes and exams!  "
},
{
  "id": "activity-04-intro-activity-4-4",
  "level": "2",
  "url": "activity-04-intro-activity.html#activity-04-intro-activity-4-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "future value formula "
},
{
  "id": "activity-04-intro-activity-4-5",
  "level": "2",
  "url": "activity-04-intro-activity.html#activity-04-intro-activity-4-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "present value formula "
},
{
  "id": "activity-04-intro-activity-4-7",
  "level": "2",
  "url": "activity-04-intro-activity.html#activity-04-intro-activity-4-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "annuity "
},
{
  "id": "activity-04-intro-activity-5-1",
  "level": "2",
  "url": "activity-04-intro-activity.html#activity-04-intro-activity-5-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  "
},
{
  "id": "activity-04-intro-activity-5-2",
  "level": "2",
  "url": "activity-04-intro-activity.html#activity-04-intro-activity-5-2",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  "
},
{
  "id": "activity-04-intro-activity-6-1",
  "level": "2",
  "url": "activity-04-intro-activity.html#activity-04-intro-activity-6-1",
  "type": "Example",
  "number": "6.8",
  "title": "",
  "body": "  A certificate of deposit (CD) is a savings instrument that many banks offer. It usually gives a higher interest rate, but you cannot access your investment for a specified amount of time. Suppose you deposit in a CD paying interest compounded monthly. How much will you have in the account after years? How much interest was earned?    We are given the following values:  (the initial deposit)  (the interest rate as a decimal)  (interest is compounded monthly)  (we're looking for the amount after 20 years)    We are asked to find the value in the account in the future (i.e., the future value), so we use the future value formula for compound interest:     To find the amount of interest earned, we observe that everything in the account other than the initial deposit must be interest! Since we deposited and ended up with , the amount of interest earned must be:   Note that we did NOT use the formula here to compute the amount of interest earned. This formula applies only to situations which use simple interest. If we used it here, we would not have calculated the correct amount of interest.   "
},
{
  "id": "activity-04-intro-activity-6-2",
  "level": "2",
  "url": "activity-04-intro-activity.html#activity-04-intro-activity-6-2",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  "
},
{
  "id": "activity-04-intro-activity-7-1",
  "level": "2",
  "url": "activity-04-intro-activity.html#activity-04-intro-activity-7-1",
  "type": "Example",
  "number": "6.9",
  "title": "",
  "body": "  A new mother knows she will need for her child’s education in years. If the account earns compounded quarterly, how much should the mother deposit now to reach her goal? How much interest is earned?    We are given the following values:  (the amount we want in 18 years)  (the interest rate as a decimal)  (interest is compounded quarterly)  (we're given the timeframe of 18 years)    We are asked to find the amount that needs to be deposited today (i.e., the present value), so we use the present value formula for compound interest:     To find the amount of interest earned, we observe that everything in the account other than the initial deposit must be interest! Since we deposited and ended up with , the amount of interest earned must be:   Again, note we did NOT use the formula to compute the amount of interest earned. This formula should be used only in situations in which simple interest is being used.   "
},
{
  "id": "activity-04-intro-activity-7-2",
  "level": "2",
  "url": "activity-04-intro-activity.html#activity-04-intro-activity-7-2",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  "
},
{
  "id": "activity-04-intro-activity-8-2",
  "level": "2",
  "url": "activity-04-intro-activity.html#activity-04-intro-activity-8-2",
  "type": "Note",
  "number": "6.10",
  "title": "",
  "body": " You do NOT need to memorize this formula! It will be provided for you on all quizzes and exams!  "
},
{
  "id": "activity-04-intro-activity-8-4",
  "level": "2",
  "url": "activity-04-intro-activity.html#activity-04-intro-activity-8-4",
  "type": "Example",
  "number": "6.11",
  "title": "",
  "body": "  Sue deposits in an account that pays interest compounded monthly. Find the account’s effective annual yield.    We are given and (monthly compounding). Using the formula we see that:   This means that if we were to deposit in an account using a simple interest rate of , we would have the same balance after one year as the account with monthly compounding at .   "
},
{
  "id": "activity-04-intro-activity-8-5",
  "level": "2",
  "url": "activity-04-intro-activity.html#activity-04-intro-activity-8-5",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  "
},
{
  "id": "activity-05-intro-activity",
  "level": "1",
  "url": "activity-05-intro-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "05. Activity Annuities",
  "body": " 05. Activity Annuities     Accounts with simple\/compound interest require a one-time deposit. If we want to ensure the account balance reaches a certain amount by a particular point in the future, then we usually need to make a substantial deposit. For example, in a previous example we saw that to ensure a future value of in years at interest compounded monthly, we would need to deposit today!  For most of us, we aren’t able to put a large sum of money like this in the bank today. Instead, we save for the future by depositing a smaller amount of money from each paycheck into the bank. This idea is called an annuity . Most retirement plans like 401(k) plans or IRA plans are examples of annuities.  In simplistic terms:   For compound interest , we make a single deposit and this money sits in the account and earns interest.    For an annuity , we make regular deposits (every month, week, year, etc.) and the money sits in the account and earns interest.     One technical thing: for the annuity formulas we will use, interest must be compounded at the same rate as the regular deposits are made. So if an annuity receives monthly deposits, interest will be compounded monthly.  See for the annuity notes.              Like with compound interest, there are two formulas we will consider in this course. Both are mathematically equivalent, but are solved in terms of different values for our convenience.  where:  is the deposit amount made during each compounding period.  is the amount in the annuity after years.  is the interest rate represented as a decimal.  is the number of compounding periods per year.  is the time in years.     You do NOT need to memorize these formulas! They will be provided for you on all quizzes and exams!   The first formula (the one with on the left-hand side) should be used when we want to determine the future value of an annuity with a given deposit amount.  The second formula (the one with on the left-hand side) should be used when we want to determine the deposit amount for an annuity to ensure a given future value. We look at some examples of using these formulas on the next page!       The calculation on the previous page was quite tedious! Fortunately, there are formulas that can be used to help us determine the future value of a loan or investment that undergoes compound interest and solve other problems relating to compound interest!  There are two formulas we will consider in this course. Both are mathematically equivalent, but are solved in terms of different values for our convenience.  where:  is the principal (starting amount) of the loan or investment, sometimes called the present value.  is the future value of the loan or investment.  is the interest rate represented as a decimal.  is the number of compounding periods per year.  is the time in years.     You do NOT need to memorize this formula! It will be provided for you on all quizzes and exams!   The first formula (the one with on the left-hand side) is called the future value formula since it is solved for the future value. It should be used when we want to determine the future value of a loan or investment with a given present value.  The second formula (the one with on the left-hand side) is called the present value formula since it is solved for the present value (principal). It should be used when we want to determine the present value of a loan or investment with a given future value.  The new quantity here that was not present before is , the number of compounding periods per year. This will need to be given to us, and is often done so using keywords. Some examples of these are:  If the compounding is done annually (once a year), then .  If the compounding is done semi-annually, then .  If the compounding is done quarterly, then .  If the compounding is done monthly, then .  If the compounding is done weekly, then .  If the compounding is done daily, then .    The most important thing to remember about using these formulas is that it assumes that we put money in the account once and let it sit there earning interest. An account where we make regular deposits is called an annuity , and will be discussed in our next unit! We look at some examples of using these formulas on the next page!           You want to have in your account when you retire in years. Your retirement account earns interest compounded weekly. How much do you need to deposit each week to meet your retirement goal? How much of the is from interest?    We are given the following values:  (the amount we want in 40 years)  (the interest rate as a decimal)  (interest is compounded weekly)  (we're given the timeframe of 40 years)    We are asked to find the amount of the regular deposits, so we use the deposit formula for an annuity:     To find the amount of interest earned, we observe that everything in the account other than the regular deposits must be interest! We first find the total amount deposited over the course of the annuity. Since we deposited each week ( per year) for years, the total amount deposited is:   Since we deposited and ended up with , the amount of interest earned must be:   Note we did NOT use the formula here to compute the amount of interest earned. This formula applies only to situations which use simple interest. If we used it here, we would not have calculated the correct amount of interest.        "
},
{
  "id": "activity-05-intro-activity-2-1-2",
  "level": "2",
  "url": "activity-05-intro-activity.html#activity-05-intro-activity-2-1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "annuity "
},
{
  "id": "activity-05-intro-activity-3-1",
  "level": "2",
  "url": "activity-05-intro-activity.html#activity-05-intro-activity-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  "
},
{
  "id": "activity-05-intro-activity-3-2",
  "level": "2",
  "url": "activity-05-intro-activity.html#activity-05-intro-activity-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  "
},
{
  "id": "activity-05-intro-activity-4-2",
  "level": "2",
  "url": "activity-05-intro-activity.html#activity-05-intro-activity-4-2",
  "type": "Note",
  "number": "6.12",
  "title": "",
  "body": " You do NOT need to memorize these formulas! They will be provided for you on all quizzes and exams!  "
},
{
  "id": "activity-05-intro-activity-4-5",
  "level": "2",
  "url": "activity-05-intro-activity.html#activity-05-intro-activity-4-5",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  "
},
{
  "id": "activity-05-intro-activity-5-3",
  "level": "2",
  "url": "activity-05-intro-activity.html#activity-05-intro-activity-5-3",
  "type": "Note",
  "number": "6.13",
  "title": "",
  "body": " You do NOT need to memorize this formula! It will be provided for you on all quizzes and exams!  "
},
{
  "id": "activity-05-intro-activity-5-4",
  "level": "2",
  "url": "activity-05-intro-activity.html#activity-05-intro-activity-5-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "future value formula "
},
{
  "id": "activity-05-intro-activity-5-5",
  "level": "2",
  "url": "activity-05-intro-activity.html#activity-05-intro-activity-5-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "present value formula "
},
{
  "id": "activity-05-intro-activity-5-7",
  "level": "2",
  "url": "activity-05-intro-activity.html#activity-05-intro-activity-5-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "annuity "
},
{
  "id": "activity-05-intro-activity-6-1",
  "level": "2",
  "url": "activity-05-intro-activity.html#activity-05-intro-activity-6-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  "
},
{
  "id": "activity-05-intro-activity-7-1",
  "level": "2",
  "url": "activity-05-intro-activity.html#activity-05-intro-activity-7-1",
  "type": "Example",
  "number": "6.14",
  "title": "",
  "body": "  You want to have in your account when you retire in years. Your retirement account earns interest compounded weekly. How much do you need to deposit each week to meet your retirement goal? How much of the is from interest?    We are given the following values:  (the amount we want in 40 years)  (the interest rate as a decimal)  (interest is compounded weekly)  (we're given the timeframe of 40 years)    We are asked to find the amount of the regular deposits, so we use the deposit formula for an annuity:     To find the amount of interest earned, we observe that everything in the account other than the regular deposits must be interest! We first find the total amount deposited over the course of the annuity. Since we deposited each week ( per year) for years, the total amount deposited is:   Since we deposited and ended up with , the amount of interest earned must be:   Note we did NOT use the formula here to compute the amount of interest earned. This formula applies only to situations which use simple interest. If we used it here, we would not have calculated the correct amount of interest.   "
},
{
  "id": "activity-05-intro-activity-7-2",
  "level": "2",
  "url": "activity-05-intro-activity.html#activity-05-intro-activity-7-2",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  "
},
{
  "id": "activity-06-intro-activity",
  "level": "1",
  "url": "activity-06-intro-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "06. Activity Loans",
  "body": " 06. Activity Loans     An installment loan is a loan which you pay off with regular weekly or monthly payments. Examples include car loans, student loans, and mortgages; we will discuss mortgages in the next unit.  Sometimes a loan requires a down payment , which is the amount paid at the time of purchase. The amount of the loan is the actual amount borrowed. It does not include the down payment (when there is one) because this money is not part of the debt.  The loan amount must be repaid, with interest, in regular payments (monthly, weekly, quarterly, etc.). The compounding frequency for interest is not always explicitly given, but is determined by how often you make payments. So, if you are required to make monthly payments on an installment loan, the interest will be compounded monthly.  For our purposes in this course, we will assume that you make loan payments on a regular schedule (every month, year, quarter, etc.) and are paying interest on the loan.  See for the Mortgages notes.              Like with compound interest and annuities, there are two formulas we will consider in this course. Both are mathematically equivalent, but are solved in terms of different values for our convenience.  where:  is the amount of the loan (borrowed amount).  is the regular payment amount.  is the interest rate represented as a decimal.  is the number of compounding periods per year.  is the time in years.     You do NOT need to memorize these formulas! They will be provided for you on all quizzes and exams!   The first formula (the one with on the left-hand side) should be used when we want to determine the payment amount for a given loan, and the second formula (the one with on the left-hand side) should be used when we want to determine how much we can afford with a given payment amount.  We look at some examples of using these formulas on the next page!           You decide to borrow for a new car. You take out an installment loan for years at interest which requires regular monthly payments. How much will the monthly payment be? How much interest will you pay in total?    We are given the following values:  (the amount borrowed)  (the interest rate as a decimal)  (interest is compounded monthly)  (the loan is taken out for 3 years)    We are asked to find the amount of the monthly payment, so we use the formula for an installment loan:     To find the amount of interest paid, we first calculate the total amount paid over the course of the loan. We know that of this went to pay off the amount borrowed, and the rest must be interest. Since we paid each month ( per year) for years, the total amount paid is:   Since of this is the amount borrowed, the amount of interest you will pay will be:         "
},
{
  "id": "activity-06-intro-activity-2-1-1",
  "level": "2",
  "url": "activity-06-intro-activity.html#activity-06-intro-activity-2-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "installment loan "
},
{
  "id": "activity-06-intro-activity-2-1-2",
  "level": "2",
  "url": "activity-06-intro-activity.html#activity-06-intro-activity-2-1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "down payment amount of the loan "
},
{
  "id": "activity-06-intro-activity-3-1",
  "level": "2",
  "url": "activity-06-intro-activity.html#activity-06-intro-activity-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  "
},
{
  "id": "activity-06-intro-activity-3-2",
  "level": "2",
  "url": "activity-06-intro-activity.html#activity-06-intro-activity-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  "
},
{
  "id": "activity-06-intro-activity-4-2",
  "level": "2",
  "url": "activity-06-intro-activity.html#activity-06-intro-activity-4-2",
  "type": "Note",
  "number": "6.15",
  "title": "",
  "body": " You do NOT need to memorize these formulas! They will be provided for you on all quizzes and exams!  "
},
{
  "id": "activity-06-intro-activity-5-1",
  "level": "2",
  "url": "activity-06-intro-activity.html#activity-06-intro-activity-5-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  "
},
{
  "id": "activity-06-intro-activity-6-1",
  "level": "2",
  "url": "activity-06-intro-activity.html#activity-06-intro-activity-6-1",
  "type": "Example",
  "number": "6.16",
  "title": "",
  "body": "  You decide to borrow for a new car. You take out an installment loan for years at interest which requires regular monthly payments. How much will the monthly payment be? How much interest will you pay in total?    We are given the following values:  (the amount borrowed)  (the interest rate as a decimal)  (interest is compounded monthly)  (the loan is taken out for 3 years)    We are asked to find the amount of the monthly payment, so we use the formula for an installment loan:     To find the amount of interest paid, we first calculate the total amount paid over the course of the loan. We know that of this went to pay off the amount borrowed, and the rest must be interest. Since we paid each month ( per year) for years, the total amount paid is:   Since of this is the amount borrowed, the amount of interest you will pay will be:    "
},
{
  "id": "activity-06-intro-activity-6-2",
  "level": "2",
  "url": "activity-06-intro-activity.html#activity-06-intro-activity-6-2",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  "
},
{
  "id": "activity-07-intro-activity",
  "level": "1",
  "url": "activity-07-intro-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "07. Activity Mortgages",
  "body": " 07. Activity Mortgages     A mortgage is a long-term loan, usually 15 or 30 years, for purposes of buying a home. Like other loans, they must be repaid on regular intervals (usually monthly) with regular payments and accrue interest over time compounded at the same rate as the payments.  See for the Mortgages notes.   We begin by noting that we will be considering a very simplistic view of mortgages. In reality, they are extraordinarily complicated and technical, and the complete mathematics behind them is too advanced for us in this course. However, our goal is to understand the basics of how mortgages work and how math can be used to analyze them.  Mortgages have some special features that distinguish them from a typical loan. These include:    Down Payment : This is a percent of the sale price of the home that is paid at the time of closing (purchase). Because it is paid at closing, money is not borrowed to cover the down payment. In other words, the amount of the mortgage is the sale price of the home minus the down payment amount.     Points : This is a fee paid to a lender at the time of closing. Each point represents one percent of the mortgage amount, i.e.:  point is of the mortgage amount  points is of the mortgage amount  points is of the mortgage amount       Points are not included in the mortgage amount since they must be paid at closing, and is not considered interest. One important point (ha!) here: points are taken on the mortgage amount, not the sale price!  There are MANY other fees associated with mortgages that we will not discuss here; this is an example of the simplistic view mentioned above. One nice thing about mortgages is that once we take the down payment into consideration, the basic mathematics of mortgages is the same as with installment loans! For example, we use the same two formulas to determine the payment amount for a given mortgage and the maximum mortgage amount we can afford based on a given payment amount, respectively: where:  is the amount of the mortgage (borrowed amount).  is the regular payment amount.  is the interest rate represented as a decimal.  is the number of compounding periods per year.  is the time in years.     You do NOT need to memorize these formulas! They will be provided for you on all quizzes and exams!                  See and . The price of a home is . The bank requires a down payment and two points at the time of closing. The cost of the home is financed with a -year fixed-rate mortgage at .  If we take a closer look at the example above, we notice something that is likely surprising to anyone who has not encountered a mortgage before: more than half of the amount paid covers the interest for the mortgage! In fact, over of the total paid covers the interest. This is a consequence of the long length of the mortgage.         Amanda and Fred are buying a house on a -year mortgage. They can only afford to pay per month for a mortgage. If they have an interest rate of , what is the maximum price of a mortgage they can afford?    We are given the following values:  (their max payment amount)  (the interest rate as a decimal)  (interest is compounded monthly)  (the mortgage will be for 30 years)    We are asked to find the maximum amount of a loan we can afford, so we use the installment loan formula solved for :     Based on this calculation, if Amanda and Fred can only afford an monthly payment for a mortgage, then they should be sure not to take out a mortgage larger than around .        "
},
{
  "id": "activity-07-intro-activity-2-1-1",
  "level": "2",
  "url": "activity-07-intro-activity.html#activity-07-intro-activity-2-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mortgage "
},
{
  "id": "activity-07-intro-activity-2-3",
  "level": "2",
  "url": "activity-07-intro-activity.html#activity-07-intro-activity-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Down Payment Points "
},
{
  "id": "activity-07-intro-activity-2-6",
  "level": "2",
  "url": "activity-07-intro-activity.html#activity-07-intro-activity-2-6",
  "type": "Note",
  "number": "6.17",
  "title": "",
  "body": " You do NOT need to memorize these formulas! They will be provided for you on all quizzes and exams!  "
},
{
  "id": "activity-07-intro-activity-3-1",
  "level": "2",
  "url": "activity-07-intro-activity.html#activity-07-intro-activity-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  "
},
{
  "id": "activity-07-intro-activity-4-1",
  "level": "2",
  "url": "activity-07-intro-activity.html#activity-07-intro-activity-4-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  "
},
{
  "id": "activity-07-intro-activity-4-2",
  "level": "2",
  "url": "activity-07-intro-activity.html#activity-07-intro-activity-4-2",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  "
},
{
  "id": "activity-07-intro-activity-5-3",
  "level": "2",
  "url": "activity-07-intro-activity.html#activity-07-intro-activity-5-3",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  "
},
{
  "id": "activity-07-intro-activity-6-1",
  "level": "2",
  "url": "activity-07-intro-activity.html#activity-07-intro-activity-6-1",
  "type": "Example",
  "number": "6.18",
  "title": "",
  "body": "  Amanda and Fred are buying a house on a -year mortgage. They can only afford to pay per month for a mortgage. If they have an interest rate of , what is the maximum price of a mortgage they can afford?    We are given the following values:  (their max payment amount)  (the interest rate as a decimal)  (interest is compounded monthly)  (the mortgage will be for 30 years)    We are asked to find the maximum amount of a loan we can afford, so we use the installment loan formula solved for :     Based on this calculation, if Amanda and Fred can only afford an monthly payment for a mortgage, then they should be sure not to take out a mortgage larger than around .   "
},
{
  "id": "activity-07-intro-activity-6-2",
  "level": "2",
  "url": "activity-07-intro-activity.html#activity-07-intro-activity-6-2",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  "
},
{
  "id": "handouts",
  "level": "1",
  "url": "handouts.html",
  "type": "Chapter",
  "number": "7",
  "title": "Handouts",
  "body": " Handouts    "
},
{
  "id": "homework",
  "level": "1",
  "url": "homework.html",
  "type": "Chapter",
  "number": "8",
  "title": "Homework",
  "body": " Homework    "
},
{
  "id": "ma-150-syllabus",
  "level": "1",
  "url": "ma-150-syllabus.html",
  "type": "Section",
  "number": "",
  "title": "MA-105-BL: Survey of Math",
  "body": " MA-105-BL: Survey of Math   Worcester State University, DGCE, Summer 2026     Course Information     Instructor  Dr. Hansun To, Professor of Mathematics, hto1@worcester.edu .    Meeting Information  This is a Hybrid Course , combining online and in-person learning to provide a flexible and tailored experience. You'll have the opportunity to learn at your own pace using MyOpenMath, participate in Zoom discussions as needed, and attend in-person sessions for exams.   In-person attendance is required for the following sessions:    Two midterm exams (1 hour and 30 minutes):     (In person) Thursday, June 4th, from 03:30 PM to 05:00 PM     (Online) Thursday, June 25th. (The exam will be available on Thursday, June 25th, at 08:00 AM. Please submit your work by 06:30 PM, including any necessary show work attachments.)      Final exam (three hours):     (In person) Thursday, July 2nd, from 03:30 PM to 05:30 PM      All in-person exams will be held in Sullivan room S-136 . Please plan accordingly to ensure your attendance at these mandatory sessions.    Prerequisite  Math placement exam code 3 or higher, or a weighted high school GPA of 2.7 or higher within the past 3 years      Responsibility for Learning  Every student is responsible for their own learning. The instructor will make every effort to support you; however, if you need any help it is your responsibility to reach out with questions    Course Content   In this course we will learn to improve the level of quantitative awareness of students using familiar situations that provide a sense of purpose for studying mathematics. The objective is not to make mathematicians of the students, but to help them deal as comfortably as possible with an environment that increasingly makes use of quantitative reasoning. Topics will include voting and apportionment methods, personal finance, set theory, and probability theory.     Required Materials  A calculator is required for this course. There is no required textbook; notes will be provided in class (or in pdf format) and other materials will be freely available on the MyOpenMath platform.    Calculators  A scientific, non-graphing calculator capable of computing logarithmic and trigonometric values is required, though its use will be limited to only a handful of sections. I recommend the TI-30X IIS , which you can usually find for around Graphing calculators, phones, tablets and any unauthorized devices are never allowed!    MyOpenMath  MyOpenMath (MOM) is a free, open source, online course management system designed for mathematics which we will use extensively in this course. It is available at https:\/\/www.myopenmath.com\/ . You will need to create an account and register for our course on MyOpenMath to get started; we will do this as a group during the first class meeting. All course documents and materials will be posted on MyOpenMath; and all homework will be completed through MyOpenMath.      Assignments and Grading   Homework  Practice is a primary component of the mathematical learning process. For this reason, homework sets will be assigned on MyOpenMath after most class meetings. Assignments will always be due on Wednesdays by 11:59pm. This means you will often have two homework sets due on Wednesday, one which opened on the previous Monday and the other which opened on the previous Wednesday. While the number of problems in each homework set will vary, your score will be considered as a percentage and each set will be weighted equally when computing your homework grade. The problems on the homework sets are sometimes meant to deepen or extend the understanding you have gained from the class lecture and discussion; you should expect to find some of the exercises difficult.  The online homework is set up so you can try most problems two times, then the correct answer will be shown (there may be some questions in which you have only one try, this will be indicated in the homework set). If you miss a problem and want to improve your score, you can click the ``Try a similar problem'' link, which will give you a new question of the same type. You can keep on working on versions of a question until you get it correct. You must earn at least 50% on an assignment for your score to count towards your grade; any set in which you earn less than 50% will be counted as a 0. Assignments will remain available in \"Practice\" mode after their due date to provide additional practice of concepts; new versions of problems can be generated and answered, but scores will not be saved. Be aware, opening an online homework assignment in \"Practice\" mode will disqualify you from being able to redeem a LatePass on that assignment! If you are having trouble on a problem, you may use the \"Message Instructor\" link, which will allow you to send me a message through MyOpenMath; the specific problem you are working on will be automatically included in the message. I can then reply to the message with some guidance. These messages are internal to MyOpenMath and not email, so my reply will go to your messages when you login to MyOpenMath. I will check my messages on MyOpenMath at least once per day. Some problems may have a link to a video solution of a similar problem.  To account for any unexpected emergencies or technical issues that may occur, we will utilize the LatePass feature in MyOpenMath. A LatePass can be redeemed for an automatic 48-hour extension on any online homework set which has NOT been viewed in \"Practice\" mode. To use a LatePass, click the \"Use LatePass\" button next to the appropriate assignment on MyOpenMath and the platform will automatically extend the due date for that assignment to 48 hours after the original due date. Each student will be given 8 LatePasses to use as they wish throughout the semester. Note a maximum of two LatePasses can be used on any single assignment. If circumstances require a more substantial extension, contact your instructor as soon as possible to discuss this possibility.     Exams  There will be four exams in this course, one of which will be a cumulative final exam. Tentative dates are June 4, June 25, May 6, and July 2.     Grade Allocation  Your course grade will be determined by the following distribution. You must get at least a 50% on the final exam in order to pass the class .    Assignment  Percentage    MyOpenMath Online Homework  10%    MyOpenMath Online Interactive Activities  10%    MyOpenMath Online Quizzes  10%    Exam 1  20%    Exam 2 (online)  20%    Final Exam  30%      Grading Scale  Letter grades will be assigned as follows. Grades will not be curved.    Letter Grade  Percent Needed    A  93%    A-  90%    B+  87%    B  83%    B-  80%    C+  77%    C  73%    C-  70%    D+  67%    D  63%    D-  60%    E  Below 60%       Course Policies   Email  I try to respond to emails and MyOpenMath messages within 24 hours. You are encouraged to email\/message regarding the homework; however, emails sent within 24 hours of a due date may not get a response before the deadline. So do not wait until the last minute to attempt the assignments!    Studying  To succeed in this course, you will need to do more than simply attend class. Mathematics is a subject which is learned by doing, meaning it is important to work problems outside of class to fully understand the concepts we cover. The assigned homework is the minimum amount you should be completing; if you feel like you don't fully understand a concept, ask me to guide you to some additional practice problems. A general rule for studying (in all college courses) is for each hour of class per week you spend a minimum of two hours outside of class on homework, studying, reading the text, etc.   Since this is a hybrid course and it is three credit hours, you should plan to spend at least six hours per week working on course material for a regular semester. Since this is a 7-week summer course, that time is doubled to 12 hours per week.    Academic Integrity and AI Usage  The WSU Mathematics Department does not tolerate academic dishonesty! For an explanation of what is considered academic dishonesty at WSU, please see the policy included in the 2025-2026 Undergraduate Catalog . All instructors in the WSU Mathematics Department are required to report all incidents of academic dishonesty observed, detected, or otherwise determined to have occurred to the WSU Academic Central File. WSU requires some penalty be imposed for every reported violation of the academic honesty policy. All incidents of academic dishonesty in this course will result in (at least) a score of 0 on that assignment; additional penalties will be imposed at the instructor's discretion and\/or as required by the Mathematics Department Academic Honesty Policy .   Artificial Intelligence (AI) Policy: Artificial intelligence (AI) tools (ChatGPT and similar platforms) may be used for study support and practice only . Acceptable uses include reviewing concepts, generating practice problems, checking understanding of definitions, or exploring alternative explanations of course material. AI tools are not permitted on any graded assignments, quizzes, or examinations unless explicitly authorized by the instructor. This includes, but is not limited to, using AI to generate solutions, explanations, written work, computations, graphs, or code that is submitted for credit. All submitted work must reflect the student's own understanding and effort. Reliance on AI-generated responses in place of independent problem-solving undermines the learning objectives of this course and is not allowed. Students are responsible for ensuring that any work they submit complies with this policy. Use of AI in violation of this policy will be treated as a violation of the Academic Honesty Policy and may result in penalties including a score of zero on the assignment, quiz, or exam, and additional disciplinary action as required by university policy.    Instructor Rights   As the instructor of this course, I reserve the right to make changes to the above course policies at any time. All changes will be announced in class.      Student Learning Outcomes  Students will be able to:    Students will be able to communicate their mathematical reasoning.     Financial Management: Students will be able to calculate simple and compound interest, loan installments and mortgage payments.     Probability Theory: Students will be able to determine sample spaces for experiments, calculate probabilities with fundamental counting principles, permutations and combinations.     Voting Methods: Students will be able to discuss the pros and cons of several voting methods and how they can be manipulated by a knowledgeable individual.      LASC  This is a Quantitative Reasoning (QR) course in the Liberal Arts and Sciences Curriculum (LASC).  The course addresses the following LASC Quantitative Reasoning objectives:    Acquaint students with formal systems, procedures, and sequences of operations.    Strengthen students' understanding of variables and functions.    Apply mathematical techniques to the analysis and solution of real-life problems.    Emphasize the importance of accuracy, including precise language and careful definitions of mathematical concepts.    Understand both the underlying principles and practical applications of one or more fields of mathematics.    Develop an understanding of and facility with statistical analysis an analysis, including understanding of its applications and limitations.    and the following LASC overarching objectives:    Communicate effectively orally and in writing.    Understand and employ quantitative and qualitative reasoning.    Apply skills in critical thinking.    Understand the roles of science and technology in our modern world.    Become socially responsible agents in the world.    Make connections across courses and disciplines.    Develop as healthy individuals--physically, emotionally, socially, ethically, and intellectually.      Course Schedule  Here is a tentative schedule of topics. We will try to stay on schedule as much as possible. If class is canceled for any reason, then the schedule will be adjusted to accommodate this cancelation. This could include a rearrangement of topics, removing a \"review\" day, or skipping a topic entirely, depending on the timing of the cancelation. Any changes to this schedule will be announced in class and via email.   Course Schedule and Exam Dates        Unit  Topics  Due Dates    1  Voting methods, apportionment  Fri 5\/22    2  Simple interest, compound interest  Wed 5\/27    3  Annuities, installment loans (Quiz 1)   Wed 5\/27    4  Mortgages, credit cards  Wed 6\/3      In-Person Exam 1 Thu 6\/4 (3:30-5:00pm) (S-136)     5  Set basics, subsets  Wed 6\/10    6  Set operations, surveys (Quiz 2)   Wed 6\/10    7  Intro to probability, events involving “not”, “or”, “and”  Wed 6\/17    8  Counting, permutations, combinations (Quiz 3)  Wed 6\/17      Online Exam 2 (Thu 6\/25)     9  Probability with counting, odds, conditional  Fri 6\/26      In-Person FINAL EXAM Thu 7\/2 (3:30-6:30pm) (S-136)          "
},
{
  "id": "sec-150-course-info-2",
  "level": "2",
  "url": "ma-150-syllabus.html#sec-150-course-info-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hybrid Course "
},
{
  "id": "subsec-105-TentativeSchedule-3",
  "level": "2",
  "url": "ma-150-syllabus.html#subsec-105-TentativeSchedule-3",
  "type": "Table",
  "number": "9.1",
  "title": "Course Schedule and Exam Dates",
  "body": " Course Schedule and Exam Dates        Unit  Topics  Due Dates    1  Voting methods, apportionment  Fri 5\/22    2  Simple interest, compound interest  Wed 5\/27    3  Annuities, installment loans (Quiz 1)   Wed 5\/27    4  Mortgages, credit cards  Wed 6\/3      In-Person Exam 1 Thu 6\/4 (3:30-5:00pm) (S-136)     5  Set basics, subsets  Wed 6\/10    6  Set operations, surveys (Quiz 2)   Wed 6\/10    7  Intro to probability, events involving “not”, “or”, “and”  Wed 6\/17    8  Counting, permutations, combinations (Quiz 3)  Wed 6\/17      Online Exam 2 (Thu 6\/25)     9  Probability with counting, odds, conditional  Fri 6\/26      In-Person FINAL EXAM Thu 7\/2 (3:30-6:30pm) (S-136)      "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
