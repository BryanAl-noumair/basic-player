import { render } from 'helpers/test-utils';
import SearchAndResult from '../index';
import { props } from './mocks';

const renderComponent = (props) => render(<SearchAndResult {...props} />);

describe('Preview Song', () => {
  it('should render', () => {
    const { container } = renderComponent(props);

    expect(container).toBeInTheDocument();
  });
});
