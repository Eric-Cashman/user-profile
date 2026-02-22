# User Profile React Component

A simple React application that demonstrates converting HTML into JSX 
syntax by building a reusable User Profile Card component.

## Preview

The app displays multiple user profile cards, each showing:
- A user avatar
- User name
- Email address
- A clickable Send Email button

## Technologies Used

- React
- JSX
- CSS

## How to Run

1. Clone the repository:
   git clone https://github.com/YOURUSERNAME/user-profile.git

2. Navigate into the project folder:
   cd user-profile

3. Install dependencies:
   npm install

4. Start the app:
   npm start

5. Open your browser and go to:
   http://localhost:3000

## Component Props

| Prop | Type | Description |
|------|------|-------------|
| name | string | The user's full name |
| email | string | The user's email address |
| photoUrl | string | URL to the user's avatar image |

## Test Cases

### Normal Cases
1. Valid user with name, email, and photo
2. Different user with unique name, email, and photo
3. Third unique user with all fields filled

### Edge Cases
1. Empty name field
2. Empty email field
3. Empty photo URL

## JSX Concepts Demonstrated

- Replacing `class` with `className`
- Self-closing tags like `<img />`
- Dynamic props using curly braces `{}`
- Single parent element wrapping
- Reusable component structure
```

---

Just replace `YOURUSERNAME` with your actual GitHub username. Paste this into your `README.md` file, save it, then run:
```
git add .
git commit -m "Add README"
git push origin main

## Author
Eric Cashman
AD311