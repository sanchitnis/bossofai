import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Lightbulb, CheckCircle, Lock, Trophy, Flame } from 'lucide-react';

const levels = [
  {
    id: 1,
    title: "Hello World",
    description: "Welcome to Python! Let's start with the traditional first program.",
    task: "Write a program that prints 'Hello, World!' to the console.",
    starterCode: "# Write your code here\n",
    expectedOutput: "Hello, World!",
    hint: "Use the print() function: print('Hello, World!')",
    solution: "print('Hello, World!')"
  },
  {
    id: 2,
    title: "Variables and Numbers",
    description: "Learn to store and work with numbers using variables.",
    task: "Create a variable called 'age' with value 25, then print it.",
    starterCode: "# Create a variable and print it\n",
    expectedOutput: "25",
    hint: "age = 25, then print(age)",
    solution: "age = 25\nprint(age)"
  },
  {
    id: 3,
    title: "For Loops",
    description: "Repeat actions using for loops.",
    task: "Print numbers from 1 to 3 using a for loop.",
    starterCode: "# Use a for loop\n",
    expectedOutput: "1\n2\n3",
    hint: "Use range(): for i in range(1, 4): print(i)",
    solution: "for i in range(1, 4):\n    print(i)"
  },
  {
    id: 4,
    title: "Lists Basics",
    description: "Store multiple items in lists.",
    task: "Create a list [10, 3, 7, 1] and print its length.",
    starterCode: "# Create a list\n",
    expectedOutput: "4",
    hint: "Use len(): nums = [10, 3, 7, 1]; print(len(nums))",
    solution: "nums = [10, 3, 7, 1]\nprint(len(nums))"
  },
  {
    id: 5,
    title: "Functions Basics",
    description: "Create reusable code with functions.",
    task: "Define a function called 'greet' that prints 'Hello!' and then call it.",
    starterCode: "# Define and call a function\n",
    expectedOutput: "Hello!",
    hint: "def greet(): print('Hello!'), then call greet()",
    solution: "def greet():\n    print('Hello!')\n\ngreet()"
  },
  {
    id: 6,
    title: "Bubble Sort – Concept",
    description: "Bubble Sort repeatedly compares adjacent elements and swaps them if they're in the wrong order. It 'bubbles' the largest value to the end each pass.",
    task: `Complete the bubble sort below by filling in the swap condition.

arr = [64, 34, 25, 12, 22]
n = len(arr)
for i in range(n):
    for j in range(0, n-i-1):
        if arr[j] > arr[j+1]:   # <-- this is the swap condition
            arr[j], arr[j+1] = arr[j+1], arr[j]
print(arr)`,
    starterCode: `arr = [64, 34, 25, 12, 22]
n = len(arr)
for i in range(n):
    for j in range(0, n-i-1):
        if arr[j] > arr[j+1]:
            arr[j], arr[j+1] = arr[j+1], arr[j]
print(arr)
`,
    expectedOutput: "[12, 22, 25, 34, 64]",
    hint: "The code is already correct! Just run it to see bubble sort in action.",
    solution: `arr = [64, 34, 25, 12, 22]
n = len(arr)
for i in range(n):
    for j in range(0, n-i-1):
        if arr[j] > arr[j+1]:
            arr[j], arr[j+1] = arr[j+1], arr[j]
print(arr)`
  },
  {
    id: 7,
    title: "Bubble Sort – Write It",
    description: "Now write bubble sort from scratch. Remember: nested loops, compare neighbours, swap if out of order.",
    task: "Write a bubble sort function that sorts [5, 1, 4, 2, 8] and prints the sorted list.",
    starterCode: `# Write bubble sort from scratch
def bubble_sort(arr):
    # your code here
    pass

nums = [5, 1, 4, 2, 8]
bubble_sort(nums)
print(nums)
`,
    expectedOutput: "[1, 2, 4, 5, 8]",
    hint: "Use two nested for loops. Swap arr[j] and arr[j+1] when arr[j] > arr[j+1].",
    solution: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

nums = [5, 1, 4, 2, 8]
bubble_sort(nums)
print(nums)`
  },
  {
    id: 8,
    title: "Merge Sort – Concept",
    description: "Merge Sort divides the list in half recursively, sorts each half, then merges them back together. It's a classic divide-and-conquer algorithm with O(n log n) time.",
    task: `Study and run this merge sort implementation. It sorts [38, 27, 43, 3, 9].

def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

print(merge_sort([38, 27, 43, 3, 9]))`,
    starterCode: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

print(merge_sort([38, 27, 43, 3, 9]))
`,
    expectedOutput: "[3, 9, 27, 38, 43]",
    hint: "The code is complete — just run it! Focus on understanding how merge() combines two sorted halves.",
    solution: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

print(merge_sort([38, 27, 43, 3, 9]))`
  },
  {
    id: 9,
    title: "Merge Sort – Write It",
    description: "Write merge sort from scratch. You'll need two functions: merge_sort() to split, and merge() to combine.",
    task: "Write a complete merge sort that sorts [12, 7, 3, 10, 1] and prints the result.",
    starterCode: `# Write merge sort from scratch
def merge(left, right):
    # your code here
    pass

def merge_sort(arr):
    # your code here
    pass

print(merge_sort([12, 7, 3, 10, 1]))
`,
    expectedOutput: "[1, 3, 7, 10, 12]",
    hint: "merge_sort: base case len<=1, split at mid, recurse on each half, return merge(left, right). merge: use two pointers i, j to pick smaller elements.",
    solution: `def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    return merge(merge_sort(arr[:mid]), merge_sort(arr[mid:]))

print(merge_sort([12, 7, 3, 10, 1]))`
  },
  {
    id: 10,
    title: "Quick Sort – Concept",
    description: "Quick Sort picks a pivot, partitions elements into those less than and greater than the pivot, then recurses on each partition. Average O(n log n), very fast in practice.",
    task: `Study and run this quick sort. It sorts [10, 7, 8, 9, 1, 5].

def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left   = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right  = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

print(quick_sort([10, 7, 8, 9, 1, 5]))`,
    starterCode: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left   = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right  = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

print(quick_sort([10, 7, 8, 9, 1, 5]))
`,
    expectedOutput: "[1, 5, 7, 8, 9, 10]",
    hint: "The code is complete — just run it! Notice how the list comprehensions elegantly partition around the pivot.",
    solution: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left   = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right  = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

print(quick_sort([10, 7, 8, 9, 1, 5]))`
  },
  {
    id: 11,
    title: "Quick Sort – Write It",
    description: "Write quick sort from scratch using list comprehensions to partition around a pivot.",
    task: "Write quick sort and use it to sort [3, 6, 8, 10, 1, 2, 1]. Print the result.",
    starterCode: `# Write quick sort from scratch
def quick_sort(arr):
    # your code here
    pass

print(quick_sort([3, 6, 8, 10, 1, 2, 1]))
`,
    expectedOutput: "[1, 1, 2, 3, 6, 8, 10]",
    hint: "Pick pivot = arr[len(arr)//2]. Use list comprehensions for left (x<pivot), middle (x==pivot), right (x>pivot). Recurse and concatenate.",
    solution: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left   = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right  = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

print(quick_sort([3, 6, 8, 10, 1, 2, 1]))`
  },
  {
    id: 12,
    title: "Final Challenge",
    description: "You know all three sorts — now compare them!",
    task: "Sort the list [42, 15, 8, 23, 4, 16] using all three methods and print each result on a separate line.",
    starterCode: `# Use all three sorting algorithms
data = [42, 15, 8, 23, 4, 16]

# 1. Bubble sort (sort a copy)

# 2. Merge sort (returns sorted list)

# 3. Quick sort (returns sorted list)
`,
    expectedOutput: "[4, 8, 15, 16, 23, 42]\n[4, 8, 15, 16, 23, 42]\n[4, 8, 15, 16, 23, 42]",
    hint: "Define all three functions. For bubble sort, use data[:] to copy the list. Each print should output the sorted version.",
    solution: `data = [42, 15, 8, 23, 4, 16]

def bubble_sort(arr):
    arr = arr[:]
    n = len(arr)
    for i in range(n):
        for j in range(n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

def merge_sort(arr):
    if len(arr) <= 1: return arr
    mid = len(arr)//2
    def merge(l, r):
        res, i, j = [], 0, 0
        while i<len(l) and j<len(r):
            if l[i]<=r[j]: res.append(l[i]); i+=1
            else: res.append(r[j]); j+=1
        return res+l[i:]+r[j:]
    return merge(merge_sort(arr[:mid]), merge_sort(arr[mid:]))

def quick_sort(arr):
    if len(arr)<=1: return arr
    p=arr[len(arr)//2]
    return quick_sort([x for x in arr if x<p])+[x for x in arr if x==p]+quick_sort([x for x in arr if x>p])

print(bubble_sort(data))
print(merge_sort(data))
print(quick_sort(data))`
  }
];

const REVACodingTutor = () => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [userCode, setUserCode] = useState(levels[0].starterCode);
  const [completedLevels, setCompletedLevels] = useState(new Set());
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [streak, setStreak] = useState(0);
  const [showLevelSelector, setShowLevelSelector] = useState(false);

  useEffect(() => {
    const lvl = levels.find(l => l.id === currentLevel);
    setUserCode(lvl.starterCode);
    setShowHint(false);
    setFeedback(null);
  }, [currentLevel]);

  const handleSubmit = async () => {
    const lvl = levels.find(l => l.id === currentLevel);
    setFeedback({ type: 'loading', message: '🤔 Evaluating your code...' });
    try {
      const prompt = `You are evaluating Python code for a learning platform.

Task: ${lvl.task}
Expected Output: ${lvl.expectedOutput}

User's Code:
${userCode}

Reference Solution:
${lvl.solution}

Determine if the user's code is functionally correct and will produce the expected output.
Respond ONLY with valid JSON, no markdown:
{
  "isCorrect": true/false,
  "feedback": "brief constructive feedback",
  "explanation": "one sentence explaining the key issue if wrong"
}`;

      const response = await window.claude.complete(prompt);
      const ev = JSON.parse(response.replace(/```json|```/g, '').trim());

      if (ev.isCorrect) {
        setCompletedLevels(prev => new Set([...prev, currentLevel]));
        setStreak(prev => prev + 1);
        setFeedback({ type: 'success', message: '🎉 Excellent! Level complete!', explanation: ev.feedback });
      } else {
        setStreak(0);
        setFeedback({ type: 'error', message: "Not quite right — let's review:", explanation: ev.feedback, hint: ev.explanation, expected: lvl.expectedOutput });
      }
    } catch (e) {
      setFeedback({ type: 'error', message: 'Could not evaluate. Check your syntax and try again.', expected: lvl.expectedOutput });
    }
  };

  const handleReset = () => {
    const lvl = levels.find(l => l.id === currentLevel);
    setUserCode(lvl.starterCode);
    setFeedback(null);
    setShowHint(false);
  };

  const maxUnlocked = Math.max(1, completedLevels.size > 0 ? Math.max(...completedLevels) + 1 : 1);

  const handleLevelChange = (id) => {
    if (id <= maxUnlocked) { setCurrentLevel(id); setShowLevelSelector(false); }
  };

  const lvl = levels.find(l => l.id === currentLevel);
  const progress = (completedLevels.size / levels.length) * 100;

  const categoryBadge = (id) => {
    if (id <= 5) return { label: 'Basics', color: 'bg-blue-100 text-blue-700' };
    if (id <= 7) return { label: 'Bubble Sort', color: 'bg-orange-100 text-orange-700' };
    if (id <= 9) return { label: 'Merge Sort', color: 'bg-purple-100 text-purple-700' };
    if (id <= 11) return { label: 'Quick Sort', color: 'bg-green-100 text-green-700' };
    return { label: 'Challenge', color: 'bg-red-100 text-red-700' };
  };

  const badge = categoryBadge(currentLevel);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-2 border-blue-500">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold text-blue-600">REVACodingTutor</h1>
              <div className="hidden md:flex items-center space-x-2 text-gray-600">
                <Trophy className="w-5 h-5" />
                <span className="font-medium">{completedLevels.size}/{levels.length} Levels</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-orange-100 px-3 py-1 rounded-full">
                <Flame className="w-4 h-4 text-orange-500" />
                <span className="font-bold text-orange-700">{streak}</span>
                <span className="text-orange-600 text-sm">streak</span>
              </div>
              <button onClick={() => setShowLevelSelector(!showLevelSelector)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Level {currentLevel}
              </button>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Overall Progress</span><span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </header>

      {/* Level Selector */}
      {showLevelSelector && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Select Level</h2>
                <button onClick={() => setShowLevelSelector(false)} className="text-gray-500 hover:text-gray-700 text-xl">×</button>
              </div>
              {/* Category headers */}
              {[
                { label: '🔵 Python Basics', ids: [1,2,3,4,5] },
                { label: '🟠 Bubble Sort', ids: [6,7] },
                { label: '🟣 Merge Sort', ids: [8,9] },
                { label: '🟢 Quick Sort', ids: [10,11] },
                { label: '🔴 Final Challenge', ids: [12] },
              ].map(cat => (
                <div key={cat.label} className="mb-6">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">{cat.label}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {cat.ids.map(id => {
                      const l = levels.find(x => x.id === id);
                      const done = completedLevels.has(id);
                      const locked = id > maxUnlocked;
                      const cur = id === currentLevel;
                      return (
                        <button key={id} onClick={() => !locked && handleLevelChange(id)} disabled={locked}
                          className={`p-4 rounded-lg border-2 text-left transition-all ${cur ? 'border-blue-500 bg-blue-50' : done ? 'border-green-500 bg-green-50 hover:bg-green-100' : locked ? 'border-gray-300 bg-gray-100 cursor-not-allowed opacity-50' : 'border-gray-300 bg-white hover:border-blue-300 hover:bg-blue-50'}`}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-sm text-gray-500">Level {id}</span>
                            {done ? <CheckCircle className="w-4 h-4 text-green-600" /> : locked ? <Lock className="w-4 h-4 text-gray-400" /> : null}
                          </div>
                          <p className="font-semibold text-gray-800 text-sm">{l.title}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left – Instructions */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${badge.color}`}>{badge.label}</span>
                <h2 className="text-2xl font-bold text-gray-800 mt-2 flex items-center gap-2">
                  Level {currentLevel}: {lvl.title}
                  {completedLevels.has(currentLevel) && <CheckCircle className="w-5 h-5 text-green-600" />}
                </h2>
              </div>
            </div>

            <p className="text-gray-600 mb-4">{lvl.description}</p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
              <h3 className="font-semibold text-blue-800 mb-1">Task:</h3>
              <p className="text-blue-700 text-sm whitespace-pre-wrap">{lvl.task}</p>
            </div>

            {/* Hint */}
            <div className="mb-4">
              <button onClick={() => setShowHint(!showHint)}
                className="flex items-center space-x-2 text-yellow-600 hover:text-yellow-700 transition-colors">
                <Lightbulb className="w-5 h-5" />
                <span className="font-medium">{showHint ? 'Hide Hint' : 'Show Hint'}</span>
              </button>
              {showHint && (
                <div className="mt-3 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                  <p className="text-yellow-800 text-sm">{lvl.hint}</p>
                </div>
              )}
            </div>

            {/* Feedback */}
            {feedback && (
              <div className={`p-4 rounded-lg ${feedback.type === 'success' ? 'bg-green-50 border border-green-200' : feedback.type === 'loading' ? 'bg-blue-50 border border-blue-200' : 'bg-red-50 border border-red-200'}`}>
                <p className={`font-medium mb-2 ${feedback.type === 'success' ? 'text-green-800' : feedback.type === 'loading' ? 'text-blue-800' : 'text-red-800'}`}>
                  {feedback.message}
                </p>
                {feedback.explanation && <p className="text-sm text-gray-700 mb-2">{feedback.explanation}</p>}
                {feedback.expected && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Expected output:</p>
                    <pre className="bg-gray-100 p-2 rounded text-sm font-mono">{feedback.expected}</pre>
                  </div>
                )}
                {feedback.hint && feedback.type === 'error' && (
                  <div className="mt-3 p-3 bg-blue-50 rounded">
                    <p className="text-sm text-blue-800"><strong>Tip:</strong> {feedback.hint}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right – Editor */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
              <h3 className="font-semibold">Python Code Editor</h3>
              <div className="flex items-center space-x-2">
                <button onClick={handleReset}
                  className="flex items-center space-x-1 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm">
                  <RotateCcw className="w-4 h-4" /><span>Reset</span>
                </button>
                <button onClick={handleSubmit}
                  className="flex items-center space-x-1 bg-green-600 hover:bg-green-500 px-3 py-1 rounded text-sm">
                  <Play className="w-4 h-4" /><span>Run Code</span>
                </button>
              </div>
            </div>
            <textarea
              value={userCode}
              onChange={e => setUserCode(e.target.value)}
              className="w-full h-96 p-4 font-mono text-sm bg-gray-900 text-green-400 border-0 resize-none focus:outline-none"
              spellCheck={false}
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between items-center">
          <button onClick={() => currentLevel > 1 && handleLevelChange(currentLevel - 1)} disabled={currentLevel === 1}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
            ← Previous
          </button>
          <p className="text-gray-600">Level {currentLevel} of {levels.length}</p>
          <button onClick={() => completedLevels.has(currentLevel) && currentLevel < levels.length && handleLevelChange(currentLevel + 1)}
            disabled={!completedLevels.has(currentLevel) || currentLevel === levels.length}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
            Next →
          </button>
        </div>
      </main>
    </div>
  );
};

export default REVACodingTutor;
