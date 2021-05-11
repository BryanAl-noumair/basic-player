import { render } from 'helpers/test-utils';
import PreviewSong from '../index';
import { props } from './mocks';

const renderComponent = (props) => render(<PreviewSong {...props} />);

describe('Preview Song', () => {
  it('should render', () => {
    const { container } = renderComponent(props);

    expect(container).toBeInTheDocument();
  });
});
