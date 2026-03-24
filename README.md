# Removal Exam: HTML/CSS + JavaScript

**Total Duration:** 2.5 Hours
**Total Points:** 70

## Part 1: HTML & CSS (Professional Portfolio) - 40 Points

### Task: Build a Professional Portfolio Page with Side Navigation and Hero Banner

#### File Structure

 ```plaintext
 project/
 ├── index.html
 └── styles.css (optional)
 ```

#### HTML Requirements (20 points)

Students must create a single-page portfolio containing the following specific elements:

- **Side Navigation Bar**
  - Create a `<nav>` element fixed to the left side of the viewport.
  - Include at least 6 anchor links (`<a>`) pointing to the section IDs below.
  - Labels must be: *Home*, *About*, *Experience*, *Education*, *Skills*, *Contact*.
  - Each link must use the hash syntax (e.g., `href="#about"`).

- **Hero Section (`id="hero"`)**
  - A `<header>` containing the student's full name (`<h1>`) and professional title (`<p class="title">)`.
  - A call-to-action button linking to the Contact section.
- **Professional Summary (id="about")**
  - A `<section>` with an `<h2>` and 3-4 substantive sentences describing their background and goals.

- **Work Experience (`id="experience"`)**
  - A `<section>` containing at least 2 job entries.
  - Each entry must include: Job Title, Company Name, Dates, and a bulleted list of 2-3 responsibilities.
  - You can make up an experience if you don't have one as long as you keep it realistic.

- **Education (`id="education"`)**
  - A `<section>` detailing their degree, institution, and graduation year.

- **Skills (`id="skills"`)**
  - A `<section>` with an unordered list (`<ul>`) of at least 6 technical skills.

- **Contact Form (`id="contact"`)**
  - A `<form>` with labels and inputs for: Name, Email, Phone, Subject, and Message.
  - All inputs must have the required attribute where appropriate.
  - A submit button.

- **Footer**
  - A `<footer>` with a copyright notice and navigation links.

#### CSS Requirements (20 points)

You must style the page to meet these criteria:

- **Smooth Scrolling**
  - Enable smooth scrolling for the entire page using the scroll-behavior: smooth property on the html selector.

- **Side Navigation Styling**
  - The nav must be position: fixed on the left.
  - Must have a distinct background color and padding.
  - Navigation links must have a :hover state (e.g., color change or background highlight).

- **CSS Variables**
  - Define at least 3 custom properties in `:root` (e.g., `--primary-color`, `--text-color`, `--bg-color`).
  - These variables must be used throughout the stylesheet.

- **Hero & Layout**
  - The hero section must have a background color/gradient and centered text.
  - Use Flexbox to center content or manage layout within sections.

- **Form Styling**
  - Inputs must have padding, borders, and a visible `:focus` state.
  - The submit button must match the site's design aesthetic.

- **Responsiveness**
  - Include a media query for screens smaller than 768px.
  - On mobile, the side nav must adapt (e.g., move to the top or become a horizontal bar).
  - Form inputs must stack vertically.
  - ***Must follow the mobile-first design approach.***

## Part 2: JavaScript - 30 Points

### Task: Solve Two Algorithmic Problems

- **Constraint:** Do NOT use the DOM API (document.getElementById, querySelector, etc.).
- Method: Solve the problems using pure JavaScript logic. Use `console.log()` to display the results.

#### Problem 1: "Valid Parentheses" (15 Points)

**Description:**
Write a function named `isValidParentheses` that takes a string containing only the characters `(`, `)`, `{`, `}`, `[`, and `]`. The function should return true if the input string is valid, and false otherwise.

**Rules for Validity:**
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket must have a corresponding open bracket of the same type.

**Examples:**

```plaintext
 "()" → true
 "()[]{}" → true
 "(]" → false
 "([)]" → false
 "{[]}" → true
```

**Requirements:**

- Use a function to encapsulate the logic.
- Use flow control (`if/else`, loops) to iterate through the string.
- Use variables to track the state (e.g., a stack or counter).
- Log the result for at least 3 test cases.

#### Problem 2: "Two Sum" (15 Points)

**Description:**
Write a function named `findTwoSum` that takes an array of integers and a target number. The function should return an array containing the indices of the two numbers in the input array that add up to the target.

**Assumptions:**

- Each input has exactly one solution.
- You may not use the same element twice.

**Examples:**

```javascript
 Input: nums = [2, 7, 11, 15], target = 9
```

```powershell
 Output: [0, 1] (Because nums[0] + nums[1] == 9)
```

```javascript
 Input: nums = [3, 2, 4], target = 6
```

```powershell
 Output: [1, 2]
```

**Requirements:**

- Use a function to encapsulate the logic.
- Use nested loops or a single loop with logic to find the pair.
- Use variables to store indices and values.
- Log the result for at least 2 test cases.

## Grading Rubric (Total 70 Points)

|Section|Criteria|Points|
|----|----|----|
|Part 1: HTML|Side Nav (6 links, fixed position, matching IDs)|6|
||Hero, About, Experience (2 jobs), Education, Skills (6 items), Contact Form|8|
||Semantic tags (header, section, footer, nav, form)|6|
|Part 1: CSS|Smooth scrolling enabled|4|
||Side nav styling (fixed, hover effects)|4|
||CSS Variables (3+) used correctly|3|
||Flexbox layout & Form styling|3|
||Responsive Media Query (mobile adaptation)|3|
|Part 2: JS|Problem 1: Correct logic for parentheses validation|8|
||Problem 1: Proper use of loops/conditionals|4|
||Problem 2: Correct logic for finding two sum indices|8|
||Problem 2: Proper use of loops/conditionals|4|
||General: No DOM usage, clean code, console.log output|2|
|TOTAL||70|
