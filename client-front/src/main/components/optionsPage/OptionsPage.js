import { useValue } from '../../context/ContextProvider';
import { TextOption } from './components';

const OptionsPage = ({ setSelectedLink, link }) => {
  const {
    state: { currentUser, product },
    dispatch,
  } = useValue();

  return (
    <>
      <TextOption />
    </>
  );
};
export default OptionsPage;
