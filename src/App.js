import React from 'react';
import UserProfile from './UserProfile';

function App() {
  return (
    <div>
      {/* Normal Test Cases */}
      <UserProfile
        name="Jane Doe"
        email="jane.doe@example.com"
        photoUrl="https://i.pravatar.cc/100?img=1"
      />
      <UserProfile
        name="John Smith"
        email="john.smith@example.com"
        photoUrl="https://i.pravatar.cc/100?img=2"
      />
      <UserProfile
        name="Alice Johnson"
        email="alice.johnson@example.com"
        photoUrl="https://i.pravatar.cc/100?img=3"
      />

      {/* Edge Test Cases */}
      <UserProfile name="" email="noname@example.com" photoUrl="https://i.pravatar.cc/100?img=4" />
      <UserProfile name="No Email User" email="" photoUrl="https://i.pravatar.cc/100?img=5" />
      <UserProfile name="No Photo" email="nophoto@example.com" photoUrl="" />
    </div>
  );
}

export default App;