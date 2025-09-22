import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta = {
  title: 'Components/Checkbox Field',
  tags: ['autodocs'],
  render: () =>
    html`<fieldset class=" ds-c-checkbox-field">
      <label class="ds-c-checkbox-field__label">Label</label>
      <div class="ds-c-checkbox-field__body">
        <ul class="ds-c-checkbox-field__list" id="checkbox-field">
          <li class="ds-c-checkbox-field__item">
            <input
              type="checkbox"
              class="ds-c-checkbox__input"
              id="checkbox-1"
              name="checkbox-field-1"
              value="checbox-item-1"
              aria-describedby="checkbox-1-description"
            />
            <span class="ds-c-checkbox__custom-check">
              <svg class="ds-c-checkbox-field__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.62706 17.4355L1.93746 11.7459L0 13.6697L7.62706 21.2968L24 4.92382L22.0762 3L7.62706 17.4355Z"></path>
              </svg>
            </span>
            <label class="ds-c-checkbox-field-item__label" for="checkbox-1">Item 1</label>
          </li>
          <li class="ds-c-checkbox-field__item">
            <input
              type="checkbox"
              class="ds-c-checkbox__input"
              id="checkbox-2"
              name="checkbox-field-1"
              value="checbox-item-2"
              aria-describedby="checkbox-2-description"
            />
            <span class="ds-c-checkbox__custom-check">
              <svg class="ds-c-checkbox-field__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.62706 17.4355L1.93746 11.7459L0 13.6697L7.62706 21.2968L24 4.92382L22.0762 3L7.62706 17.4355Z"></path>
              </svg>
            </span>
            <label class="ds-c-checkbox-field-item__label" for="checkbox-2">Item 2</label>
          </li>
          <li class="ds-c-checkbox-field__item">
            <input
              type="checkbox"
              class="ds-c-checkbox__input"
              id="checkbox-3"
              name="checkbox-field-1"
              value="checbox-item-3"
              aria-describedby="checkbox-2-description"
            />
            <span class="ds-c-checkbox__custom-check">
              <svg class="ds-c-checkbox-field__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.62706 17.4355L1.93746 11.7459L0 13.6697L7.62706 21.2968L24 4.92382L22.0762 3L7.62706 17.4355Z"></path>
              </svg>
            </span>
            <label class="ds-c-checkbox-field-item__label" for="checkbox-3">Item 3</label>
          </li>
        </ul>
      </div>
    </fieldset>`,
  component: 'ds-checkbox-field'
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const NoLabel: Story = {
  render: () => html`<fieldset class=" ds-c-checkbox-field ds-c-checkbox-field--hide-label ">
    <label class="ds-c-checkbox-field__label">Label</label>
    <div class="ds-c-checkbox-field__body">
      <ul class="ds-c-checkbox-field__list" id="checkbox-field">
        <li class="ds-c-checkbox-field__item">
          <input
            type="checkbox"
            class="ds-c-checkbox__input"
            id="checkbox-1"
            name="checkbox-field-1"
            value="checbox-item-1"
            aria-describedby="checkbox-1-description"
          />
          <span class="ds-c-checkbox__custom-check">
            <svg class="ds-c-checkbox-field__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.62706 17.4355L1.93746 11.7459L0 13.6697L7.62706 21.2968L24 4.92382L22.0762 3L7.62706 17.4355Z"></path>
            </svg>
          </span>
          <label class="ds-c-checkbox-field-item__label" for="checkbox-1">Item 1</label>
        </li>
        <li class="ds-c-checkbox-field__item">
          <input
            type="checkbox"
            class="ds-c-checkbox__input"
            id="checkbox-2"
            name="checkbox-field-1"
            value="checbox-item-2"
            aria-describedby="checkbox-2-description"
          />
          <span class="ds-c-checkbox__custom-check">
            <svg class="ds-c-checkbox-field__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.62706 17.4355L1.93746 11.7459L0 13.6697L7.62706 21.2968L24 4.92382L22.0762 3L7.62706 17.4355Z"></path>
            </svg>
          </span>
          <label class="ds-c-checkbox-field-item__label" for="checkbox-2">Item 2</label>
        </li>
        <li class="ds-c-checkbox-field__item">
          <input
            type="checkbox"
            class="ds-c-checkbox__input"
            id="checkbox-3"
            name="checkbox-field-1"
            value="checbox-item-3"
            aria-describedby="checkbox-2-description"
          />
          <span class="ds-c-checkbox__custom-check">
            <svg class="ds-c-checkbox-field__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.62706 17.4355L1.93746 11.7459L0 13.6697L7.62706 21.2968L24 4.92382L22.0762 3L7.62706 17.4355Z"></path>
            </svg>
          </span>
          <label class="ds-c-checkbox-field-item__label" for="checkbox-3">Item 3</label>
        </li>
      </ul>
    </div>
  </fieldset>`
};
