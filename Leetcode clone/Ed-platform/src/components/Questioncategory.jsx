import React, { useState } from "react";
import "../css/Questioncategory.css";

const topics = [
  { name: "Array", count: 1931 }, { name: "String", count: 795 }, { name: "Hash Table", count: 704 },
  { name: "Dynamic Programming", count: 594 }, { name: "Math", count: 588 }, { name: "Sorting", count: 456 },
  { name: "Greedy", count: 418 }, { name: "Depth-First Search", count: 325 }, { name: "Binary Search", count: 308 },
  { name: "Database", count: 307 }, { name: "Matrix", count: 260 }, { name: "Tree", count: 249 },
  { name: "Breadth-First Search", count: 245 }, { name: "Bit Manipulation", count: 243 }, { name: "Two Pointers", count: 219 },
  { name: "Prefix Sum", count: 206 }, { name: "Heap (Priority Queue)", count: 195 }, { name: "Simulation", count: 180 },
  { name: "Binary Tree", count: 177 }, { name: "Stack", count: 171 }, { name: "Graph", count: 166 },
  { name: "Counting", count: 162 }, { name: "Sliding Window", count: 152 }, { name: "Design", count: 130 },
  { name: "Enumeration", count: 119 }, { name: "Backtracking", count: 108 }, { name: "Union Find", count: 88 },
  { name: "Linked List", count: 81 }, { name: "Number Theory", count: 72 }, { name: "Ordered Set", count: 71 },
  { name: "Monotonic Stack", count: 68 }, { name: "Segment Tree", count: 64 }, { name: "Trie", count: 57 },
  { name: "Combinatorics", count: 55 }, { name: "Bitmask", count: 53 }, { name: "Queue", count: 49 },
  { name: "Recursion", count: 49 }, { name: "Divide and Conquer", count: 48 }, { name: "Binary Indexed Tree", count: 43 },
  { name: "Memoization", count: 42 }, { name: "Hash Function", count: 40 }, { name: "Geometry", count: 40 },
  { name: "Binary Search Tree", count: 40 }, { name: "String Matching", count: 37 }, { name: "Topological Sort", count: 36 },
  { name: "Shortest Path", count: 34 }, { name: "Rolling Hash", count: 31 }, { name: "Game Theory", count: 28 },
  { name: "Interactive", count: 23 }, { name: "Data Stream", count: 21 }, { name: "Monotonic Queue", count: 19 },
  { name: "Brainteaser", count: 18 }, { name: "Doubly-Linked List", count: 13 }, { name: "Randomized", count: 12 },
  { name: "Merge Sort", count: 12 }, { name: "Counting Sort", count: 11 }, { name: "Iterator", count: 9 },
  { name: "Concurrency", count: 9 }, { name: "Probability and Statistics", count: 7 }, { name: "Quickselect", count: 7 },
  { name: "Suffix Array", count: 7 }, { name: "Line Sweep", count: 7 }, { name: "Bucket Sort", count: 6 },
  { name: "Minimum Spanning Tree", count: 5 }, { name: "Shell", count: 4 }, { name: "Reservoir Sampling", count: 4 },
  { name: "Strongly Connected Component", count: 3 }, { name: "Eulerian Circuit", count: 3 }
];

const Questioncategory = ({ onSelectTopic }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  const handleTopicClick = (topic) => {
    onSelectTopic(topic);
  };

  return (
    <div className="topic-wrapper">
      <div className={expanded ? "topic-grid" : "topic-scroll"}>
        {topics.map((topic, index) => (
          <button
            key={index}
            className="topic-pill"
            onClick={() => handleTopicClick(topic.name)}
          >
            {topic.name}
            <span className="count">{topic.count}</span>
          </button>
        ))}
      </div>

      <button className="expand-btn" onClick={toggleExpanded}>
        {expanded ? "Collapse ▲" : "Expand ▼"}
      </button>
    </div>
  );
};

export default Questioncategory;
