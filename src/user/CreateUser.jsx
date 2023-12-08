import { useState } from 'react';
import Button from '../ui/Button';
function CreateUser() {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        className="input mx-auto mb-8 w-80"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <Button isDisabled={false}>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
