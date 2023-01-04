export default function Footer({ theme }) {
  const text =
    theme === 'one'
      ? 'text-white'
      : theme === 'two'
      ? 'text-two-text-primary'
      : 'text-three-key-secondary';

  const textLink =
    theme === 'one'
      ? 'text-one-key-secondary hover:text-white'
      : theme === 'two'
      ? 'text-two-key-primary hover:text-two-text-primary'
      : 'text-three-text-primary hover:text-three-key-secondary';


}
