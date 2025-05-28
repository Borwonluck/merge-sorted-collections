# 📦 Merge Sorted Collections

This project demonstrates how to merge three pre-sorted arrays (with different sort orders) into a single sorted array **without using the `sort()` function**. It is implemented in TypeScript and includes unit tests written with Jest.

## 📚 Problem Statement

- `collection1` is sorted in **ascending** order
- `collection2` is sorted in **descending** order
- `collection3` is sorted in **ascending** order

Your task is to merge all three collections into one single array, sorted in **ascending** order, without using `sort()`.

## 🚀 How It Works

The `merge()` function manually combines the arrays and performs a simple **Bubble Sort** to ensure the final result is sorted in ascending order.

## 🧪 Unit Tests

Unit tests are included using **Jest** and are located in the `tests/` folder.

## 📦 Installation & Usage

### 1. Clone or Download the Project

```bash
unzip merge-sorted-collections.zip
cd merge-sorted-collections
```

### 2. Install Dependencies

```bash
npm install
npm install --save-dev @types/jest
```

### 3. Build the Project

```bash
npm run build
```

### 4. Run Unit Tests

```bash
npm test
```

You should see the test results confirming that the function works as expected.

## 🛠 Tech Stack

- TypeScript
- Jest (with ts-jest)
- Node.js

## 📂 Project Structure

```
merge-sorted-collections/
├── src/
│   └── merge.ts            # Main logic to merge and sort arrays
├── tests/
│   └── merge.test.ts       # Jest unit tests
├── package.json            # Project config & scripts
├── tsconfig.json           # TypeScript config
├── jest.config.js          # Jest config
└── README.md               # This file
```

## 📝 License

This project is licensed under the MIT License.