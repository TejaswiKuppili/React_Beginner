import { useState } from 'react';
import { createUser } from '../api/usersApi';

const AddUserForm = ({onUserAdded}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await createUser({ name, email });
            onUserAdded(response.data);
            setName('');
            setEmail('');
        } catch (error) {
            alert('Failed to add user');
        } finally {
            setLoading(false);
        }
    }

     return (
    <form onSubmit={handleSubmit} className="form-container">
      <h3>Add New User</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Adding...' : 'Add User'}
      </button>
    </form>
  );
}

export default AddUserForm;