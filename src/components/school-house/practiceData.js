export const practiceCategories = ['Math', 'Science', 'Coding', 'Aptitude']
export const practiceDifficulties = ['Easy', 'Medium', 'Hard']

export const practiceQuestions = {
  Math: {
    Easy: [
      { id: 'm-e-1', prompt: 'If x + 7 = 19, what is x?', options: ['10', '11', '12', '13'], answer: 2 },
      { id: 'm-e-2', prompt: 'What is 15% of 200?', options: ['20', '25', '30', '35'], answer: 2 },
    ],
    Medium: [
      { id: 'm-m-1', prompt: 'Solve: 3x - 4 = 20', options: ['6', '7', '8', '9'], answer: 2 },
      { id: 'm-m-2', prompt: 'Sequence 2, 6, 12, 20 follows n(n+1). Next term?', options: ['28', '30', '32', '34'], answer: 1 },
    ],
    Hard: [
      { id: 'm-h-1', prompt: 'Roots of x^2 - 9x + 20 = 0 are:', options: ['4 and 5', '3 and 6', '2 and 10', '1 and 20'], answer: 0 },
      { id: 'm-h-2', prompt: 'If log2(x) = 5, x equals:', options: ['16', '24', '32', '64'], answer: 2 },
    ],
  },
  Science: {
    Easy: [
      { id: 's-e-1', prompt: 'Which gas do plants absorb?', options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'], answer: 2 },
      { id: 's-e-2', prompt: 'The SI unit of force is:', options: ['Joule', 'Newton', 'Pascal', 'Watt'], answer: 1 },
    ],
    Medium: [
      { id: 's-m-1', prompt: 'Human blood pH is closest to:', options: ['6.2', '7.4', '8.5', '9.1'], answer: 1 },
      { id: 's-m-2', prompt: 'Speed of light in vacuum is approximately:', options: ['3 x 10^6 m/s', '3 x 10^7 m/s', '3 x 10^8 m/s', '3 x 10^9 m/s'], answer: 2 },
    ],
    Hard: [
      { id: 's-h-1', prompt: 'Mitochondria primarily function in:', options: ['Protein synthesis', 'Cell respiration', 'Cell division', 'DNA repair'], answer: 1 },
      { id: 's-h-2', prompt: 'Which law relates pressure and volume inversely?', options: ['Charles law', 'Gay-Lussac law', 'Boyle law', 'Avogadro law'], answer: 2 },
    ],
  },
  Coding: {
    Easy: [
      { id: 'c-e-1', prompt: 'Immutable JS binding keyword is:', options: ['var', 'let', 'const', 'static'], answer: 2 },
      { id: 'c-e-2', prompt: 'FIFO structure is:', options: ['Stack', 'Queue', 'Tree', 'Graph'], answer: 1 },
    ],
    Medium: [
      { id: 'c-m-1', prompt: 'Big-O of binary search is:', options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'], answer: 1 },
      { id: 'c-m-2', prompt: 'React hook for side effects:', options: ['useMemo', 'useRef', 'useEffect', 'useState'], answer: 2 },
    ],
    Hard: [
      { id: 'c-h-1', prompt: 'Stale closure often causes:', options: ['Syntax parse error', 'Type coercion error', 'Outdated state in callbacks', 'CSS specificity clash'], answer: 2 },
      { id: 'c-h-2', prompt: 'Traversal naturally recursive for trees:', options: ['DFS', 'BFS', 'Hashing', 'Sharding'], answer: 0 },
    ],
  },
  Aptitude: {
    Easy: [
      { id: 'a-e-1', prompt: 'If ALL are SOME and SOME are NONE, can ALL be NONE?', options: ['Always', 'Never', 'Sometimes', 'Cannot be determined'], answer: 2 },
      { id: 'a-e-2', prompt: 'Odd one out: 2, 4, 8, 16, 31', options: ['8', '16', '31', '4'], answer: 2 },
    ],
    Medium: [
      { id: 'a-m-1', prompt: 'Train covers 120 km in 2 hours. Speed?', options: ['40 km/h', '50 km/h', '60 km/h', '70 km/h'], answer: 2 },
      { id: 'a-m-2', prompt: 'A > B > C in height. Shortest?', options: ['A', 'B', 'C', 'Cannot infer'], answer: 2 },
    ],
    Hard: [
      { id: 'a-h-1', prompt: 'Ratio boys:girls is 3:2 in 40 students. Girls?', options: ['14', '16', '18', '20'], answer: 1 },
      { id: 'a-h-2', prompt: 'Clock at 3:15, angle between hands?', options: ['0 deg', '7.5 deg', '15 deg', '22.5 deg'], answer: 1 },
    ],
  },
}
