---
# Course Descriptor — Course Buddy Builder Input Template
# Fill this file for each course. Run build.py to generate wiki, workbook, and skill.
# See tools/course-buddy-builder/README.md for usage instructions.

course_code: "CSE301"                      # University course code (used as folder name)
course_name: "Data Structures and Algorithms"
short_name: "DSA"                          # Used in file names and skill headings
stream: "CSE"                              # CSE | ECE | MBA | BCA | MCA | MTECH | PHD | other
semester: 5                                # 1-8 for UG, 1-4 for PG
credits: 4
instructor: "Prof. Example Name"
language: "English"

# Level for wiki page generation (beginner / intermediate / advanced / all)
# "all" generates three-level pages per concept (recommended)
wiki_level: "all"

# NotebookLM sources — URLs, Google Drive links, or local file paths relative to this file
# Supports: web URLs, YouTube, PDF, DOCX, EPUB, plain text, Markdown
# Leave empty list [] to run with --skip-notebooklm
notebooklm_sources:
  urls:
    - "https://en.wikipedia.org/wiki/Data_structure"
    - "https://en.wikipedia.org/wiki/Algorithm"
    # Add course-specific URLs: NPTEL lectures, official docs, ArXiv papers, etc.
  files:
    []
    # - "../../textbooks/dsa-cormen.pdf"
    # - "../../slides/unit1-arrays.pdf"
  youtube:
    []
    # - "https://www.youtube.com/watch?v=..."

# Textbooks (for wiki bibliography and skill reference)
textbooks:
  - title: "Introduction to Algorithms"
    authors: "Cormen, Leiserson, Rivest, Stein"
    edition: "4th"
    isbn: "978-0262046305"
    free_url: ""
  # Add more textbooks as needed

# Reference materials (open resources, course notes, etc.)
references:
  - "https://cp-algorithms.com/"
  - "https://visualgo.net/en"
  # Add more references as needed
---

# Course Overview

<!-- Write 3-5 sentences describing what this course is, why it matters, and what a student
     can do after completing it. This text appears verbatim in the wiki index page. -->

Data Structures and Algorithms (DSA) is a foundational computer science course that teaches
students how to organise data efficiently and design algorithms to process it. Mastery of DSA
is essential for software engineering, competitive programming, research, and systems design.
By the end of this course, students can analyse algorithm complexity, choose appropriate data
structures for real problems, and implement efficient solutions in code.

---

# Unit Breakdown

## Unit 1 — Complexity Analysis and Mathematical Foundations

**Duration**: Weeks 1-2 (4 lectures)

**Learning outcomes**: After this unit, the student can:
1. Compute time and space complexity of an algorithm using Big-O, Omega, and Theta notation.
2. Apply recurrence relations to analyse recursive algorithms (Master Theorem).
3. Justify algorithm selection based on complexity trade-offs.

**Key concepts** (one wiki page will be generated per concept):
- [ ] Big-O notation
- [ ] Best / average / worst case analysis
- [ ] Recurrence relations
- [ ] Master Theorem

**Assessment alignment**: Internal Assessment 1 — Q1, Q3

---

## Unit 2 — Arrays, Linked Lists, and Stacks/Queues

**Duration**: Weeks 3-5 (6 lectures)

**Learning outcomes**: After this unit, the student can:
1. Implement arrays, singly/doubly linked lists, stacks, and queues from scratch.
2. Identify when each structure is appropriate for a given problem.
3. Analyse the time complexity of standard operations on each structure.

**Key concepts**:
- [ ] Static vs. dynamic arrays
- [ ] Singly linked list
- [ ] Doubly linked list
- [ ] Stack (LIFO) and applications
- [ ] Queue (FIFO), Deque, Priority Queue

**Assessment alignment**: Lab 1, Internal Assessment 1 — Q2

---

## Unit 3 — Trees and Heaps

**Duration**: Weeks 6-8 (6 lectures)

**Learning outcomes**: After this unit, the student can:
1. Traverse binary trees using pre-order, in-order, and post-order strategies.
2. Implement Binary Search Trees with insert, delete, and search.
3. Build and use Min/Max heaps for priority-based problems.
4. Explain AVL and Red-Black tree balancing (conceptual level).

**Key concepts**:
- [ ] Binary tree and binary search tree
- [ ] Tree traversal algorithms
- [ ] Heap and heapify
- [ ] AVL tree (balancing concept)
- [ ] Trie (prefix trees)

**Assessment alignment**: Internal Assessment 2 — Q1, Q2; Lab 2

---

## Unit 4 — Graphs

**Duration**: Weeks 9-11 (6 lectures)

**Learning outcomes**: After this unit, the student can:
1. Represent graphs using adjacency matrix and adjacency list.
2. Implement BFS and DFS and explain their use cases.
3. Find shortest paths using Dijkstra's and Bellman-Ford algorithms.
4. Detect cycles and apply topological sort to DAGs.

**Key concepts**:
- [ ] Graph representation
- [ ] BFS and DFS
- [ ] Shortest path: Dijkstra, Bellman-Ford
- [ ] Minimum spanning tree: Kruskal, Prim
- [ ] Topological sort and cycle detection

**Assessment alignment**: Internal Assessment 2 — Q3; End Semester Exam

---

## Unit 5 — Sorting and Searching

**Duration**: Weeks 12-13 (4 lectures)

**Learning outcomes**: After this unit, the student can:
1. Implement and compare Bubble, Selection, Insertion, Merge, Quick, and Heap sort.
2. Apply Binary Search and its variants to sorted data.
3. Explain the lower bound of comparison-based sorting.
4. Use hashing for O(1) average-case search.

**Key concepts**:
- [ ] Comparison-based sorting algorithms
- [ ] Merge sort and Quick sort (divide and conquer)
- [ ] Counting sort and Radix sort
- [ ] Binary search and variants
- [ ] Hash tables and collision resolution

**Assessment alignment**: End Semester Exam; Lab 3

---

## Unit 6 — Dynamic Programming and Greedy Algorithms

**Duration**: Weeks 14-15 (4 lectures)

**Learning outcomes**: After this unit, the student can:
1. Identify problems with optimal substructure and overlapping subproblems.
2. Apply memoisation and tabulation to solve DP problems.
3. Apply greedy strategies and prove their correctness on standard problems.
4. Solve classic problems: LCS, LIS, 0/1 Knapsack, Activity Selection.

**Key concepts**:
- [ ] Optimal substructure and overlapping subproblems
- [ ] Memoisation (top-down DP)
- [ ] Tabulation (bottom-up DP)
- [ ] Classic DP problems
- [ ] Greedy paradigm and correctness proofs

**Assessment alignment**: End Semester Exam; Internal Assessment 2 — Q4

---

# Assessment Blueprint

| Component | Weight | Coverage |
|-----------|--------|----------|
| Internal Assessment 1 | 15% | Units 1-2 |
| Internal Assessment 2 | 15% | Units 3-4 |
| Lab Assessments (3) | 20% | Practical implementation across all units |
| End Semester Exam | 50% | All units; emphasis on Units 4-6 |

**Lab problems**: Each lab assessment requires submitting working code + a 1-page complexity analysis. This is directly portfolio evidence (Srujana Stage 2, Application).

---

# Srujana Evidence Mapping

<!-- Map key outcomes to Srujana Pathway stages and evidence types.
     The builder uses this to populate the evidence-link cells in the workbook. -->

| Unit | Srujana Stage | Evidence type |
|------|--------------|---------------|
| 1-2 | Stage 1 — Foundation | Concept summary in student's own words; solved problem set |
| 3-4 | Stage 2 — Application | Lab submission with complexity analysis; solved competitive problem |
| 5-6 | Stage 2-3 — Creation | Original optimisation solution; competitive programming submission (Codeforces/LeetCode) |
| All | Stage 3-4 | Open-source contribution fixing a DSA-related issue; teaching a peer (recorded) |

---

# Faculty Notes Area

<!-- Faculty can add notes below this line. These are included in the wiki's faculty-notes/ page
     and do not affect the generated base wiki content. -->

> **Faculty note placeholder**: Add course-specific tips, common student misconceptions,
> preferred teaching sequence variations, or links to past question papers here.
