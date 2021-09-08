import Chat from './Chat.vue';
import { mount, shallowMount } from '@vue/test-utils';

describe('Chat service', () => {
  let wrapper = null;

  beforeEach(async () => {
    wrapper = mount(Chat, { propsData: {} });
  });

  it('should match the snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should hava a list item for every message in props', () => {
    const shallowWrapper = shallowMount(Chat, {
      propsData: {
        messages: [{ content: 'Hello' }, { content: 'World' }],
      },
    });

    expect(shallowWrapper.findAll('.message-display')).toHaveLength(2);
  });
});
