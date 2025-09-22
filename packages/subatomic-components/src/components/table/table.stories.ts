import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta = {
  title: 'Components/Table',
  tags: ['autodocs'],
  render: () => html`
    <table class="ds-c-table ">
      <thead class="ds-c-table__header">
        <tr class="ds-c-table__row">
          <th class="ds-c-table__header-cell">Order Number</th>
          <th class="ds-c-table__header-cell">Date</th>
          <th class="ds-c-table__header-cell">Amount</th>
          <th class="ds-c-table__header-cell">Payment Method</th>
          <th class="ds-c-table__header-cell">Status</th>
          <th class="ds-c-table__header-cell">Items</th>
          <th class="ds-c-table__header-cell">Shipping Method</th>
          <th class="ds-c-table__header-cell">Shipping Address</th>
          <th class="ds-c-table__header-cell">Tax</th>
          <th class="ds-c-table__header-cell">Discount</th>
          <th class="ds-c-table__header-cell">Total</th>
        </tr>
      </thead>
      <tbody class="ds-c-table__body">
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-001</td>
          <td class="ds-c-table__cell">2023-10-24</td>
          <td class="ds-c-table__cell">$249.99</td>
          <td class="ds-c-table__cell">Credit Card</td>
          <td class="ds-c-table__cell"><span class="status-text success">Completed</span></td>
          <td class="ds-c-table__cell">3</td>
          <td class="ds-c-table__cell">Express</td>
          <td class="ds-c-table__cell">3202 Token St, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-002</td>
          <td class="ds-c-table__cell">2023-10-25</td>
          <td class="ds-c-table__cell">$199.99</td>
          <td class="ds-c-table__cell">PayPal</td>
          <td class="ds-c-table__cell"><span class="status-text warning">Pending</span></td>
          <td class="ds-c-table__cell">2</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">7272 Token Ave, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-003</td>
          <td class="ds-c-table__cell">2023-10-26</td>
          <td class="ds-c-table__cell">$149.99</td>
          <td class="ds-c-table__cell">Bank Transfer</td>
          <td class="ds-c-table__cell"><span class="status-text">Processing</span></td>
          <td class="ds-c-table__cell">1</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">2311 Third Ct, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-004</td>
          <td class="ds-c-table__cell">2023-10-27</td>
          <td class="ds-c-table__cell">$129.99</td>
          <td class="ds-c-table__cell">Credit Card</td>
          <td class="ds-c-table__cell"><span class="status-text success">Completed</span></td>
          <td class="ds-c-table__cell">1</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">321 Token Blvd, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-005</td>
          <td class="ds-c-table__cell">2023-10-28</td>
          <td class="ds-c-table__cell">$99.99</td>
          <td class="ds-c-table__cell">PayPal</td>
          <td class="ds-c-table__cell"><span class="status-text warning">Pending</span></td>
          <td class="ds-c-table__cell">1</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">1230 Token Rd, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-006</td>
          <td class="ds-c-table__cell">2023-10-24</td>
          <td class="ds-c-table__cell">$249.99</td>
          <td class="ds-c-table__cell">Credit Card</td>
          <td class="ds-c-table__cell"><span class="status-text success">Completed</span></td>
          <td class="ds-c-table__cell">3</td>
          <td class="ds-c-table__cell">Express</td>
          <td class="ds-c-table__cell">3202 Token St, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-007</td>
          <td class="ds-c-table__cell">2023-10-25</td>
          <td class="ds-c-table__cell">$199.99</td>
          <td class="ds-c-table__cell">PayPal</td>
          <td class="ds-c-table__cell"><span class="status-text warning">Pending</span></td>
          <td class="ds-c-table__cell">2</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">7272 Token Ave, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-008</td>
          <td class="ds-c-table__cell">2023-10-26</td>
          <td class="ds-c-table__cell">$149.99</td>
          <td class="ds-c-table__cell">Bank Transfer</td>
          <td class="ds-c-table__cell"><span class="status-text">Processing</span></td>
          <td class="ds-c-table__cell">1</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">2311 Third Ct, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-009</td>
          <td class="ds-c-table__cell">2023-10-27</td>
          <td class="ds-c-table__cell">$129.99</td>
          <td class="ds-c-table__cell">Credit Card</td>
          <td class="ds-c-table__cell"><span class="status-text success">Completed</span></td>
          <td class="ds-c-table__cell">1</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">321 Token Blvd, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-010</td>
          <td class="ds-c-table__cell">2023-10-28</td>
          <td class="ds-c-table__cell">$99.99</td>
          <td class="ds-c-table__cell">PayPal</td>
          <td class="ds-c-table__cell"><span class="status-text warning">Pending</span></td>
          <td class="ds-c-table__cell">1</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">1230 Token Rd, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-011</td>
          <td class="ds-c-table__cell">2023-10-24</td>
          <td class="ds-c-table__cell">$249.99</td>
          <td class="ds-c-table__cell">Credit Card</td>
          <td class="ds-c-table__cell"><span class="status-text success">Completed</span></td>
          <td class="ds-c-table__cell">3</td>
          <td class="ds-c-table__cell">Express</td>
          <td class="ds-c-table__cell">3202 Token St, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-012</td>
          <td class="ds-c-table__cell">2023-10-25</td>
          <td class="ds-c-table__cell">$199.99</td>
          <td class="ds-c-table__cell">PayPal</td>
          <td class="ds-c-table__cell"><span class="status-text warning">Pending</span></td>
          <td class="ds-c-table__cell">2</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">7272 Token Ave, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-013</td>
          <td class="ds-c-table__cell">2023-10-26</td>
          <td class="ds-c-table__cell">$149.99</td>
          <td class="ds-c-table__cell">Bank Transfer</td>
          <td class="ds-c-table__cell"><span class="status-text">Processing</span></td>
          <td class="ds-c-table__cell">1</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">2311 Third Ct, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-014</td>
          <td class="ds-c-table__cell">2023-10-27</td>
          <td class="ds-c-table__cell">$129.99</td>
          <td class="ds-c-table__cell">Credit Card</td>
          <td class="ds-c-table__cell"><span class="status-text success">Completed</span></td>
          <td class="ds-c-table__cell">1</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">321 Token Blvd, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-015</td>
          <td class="ds-c-table__cell">2023-10-28</td>
          <td class="ds-c-table__cell">$99.99</td>
          <td class="ds-c-table__cell">PayPal</td>
          <td class="ds-c-table__cell"><span class="status-text warning">Pending</span></td>
          <td class="ds-c-table__cell">1</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">1230 Token Rd, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-016</td>
          <td class="ds-c-table__cell">2023-10-24</td>
          <td class="ds-c-table__cell">$249.99</td>
          <td class="ds-c-table__cell">Credit Card</td>
          <td class="ds-c-table__cell"><span class="status-text success">Completed</span></td>
          <td class="ds-c-table__cell">3</td>
          <td class="ds-c-table__cell">Express</td>
          <td class="ds-c-table__cell">3202 Token St, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-017</td>
          <td class="ds-c-table__cell">2023-10-25</td>
          <td class="ds-c-table__cell">$199.99</td>
          <td class="ds-c-table__cell">PayPal</td>
          <td class="ds-c-table__cell"><span class="status-text warning">Pending</span></td>
          <td class="ds-c-table__cell">2</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">7272 Token Ave, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-018</td>
          <td class="ds-c-table__cell">2023-10-26</td>
          <td class="ds-c-table__cell">$149.99</td>
          <td class="ds-c-table__cell">Bank Transfer</td>
          <td class="ds-c-table__cell"><span class="status-text">Processing</span></td>
          <td class="ds-c-table__cell">1</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">2311 Third Ct, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-019</td>
          <td class="ds-c-table__cell">2023-10-27</td>
          <td class="ds-c-table__cell">$129.99</td>
          <td class="ds-c-table__cell">Credit Card</td>
          <td class="ds-c-table__cell"><span class="status-text success">Completed</span></td>
          <td class="ds-c-table__cell">1</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">321 Token Blvd, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-020</td>
          <td class="ds-c-table__cell">2023-10-28</td>
          <td class="ds-c-table__cell">$99.99</td>
          <td class="ds-c-table__cell">PayPal</td>
          <td class="ds-c-table__cell"><span class="status-text warning">Pending</span></td>
          <td class="ds-c-table__cell">1</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">1230 Token Rd, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-021</td>
          <td class="ds-c-table__cell">2023-10-29</td>
          <td class="ds-c-table__cell">$179.99</td>
          <td class="ds-c-table__cell">Credit Card</td>
          <td class="ds-c-table__cell"><span class="status-text success">Completed</span></td>
          <td class="ds-c-table__cell">2</td>
          <td class="ds-c-table__cell">Express</td>
          <td class="ds-c-table__cell">444 Token Way, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-022</td>
          <td class="ds-c-table__cell">2023-10-29</td>
          <td class="ds-c-table__cell">$299.99</td>
          <td class="ds-c-table__cell">PayPal</td>
          <td class="ds-c-table__cell"><span class="status-text">Processing</span></td>
          <td class="ds-c-table__cell">3</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">555 Token Lane, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-023</td>
          <td class="ds-c-table__cell">2023-10-30</td>
          <td class="ds-c-table__cell">$159.99</td>
          <td class="ds-c-table__cell">Bank Transfer</td>
          <td class="ds-c-table__cell"><span class="status-text warning">Pending</span></td>
          <td class="ds-c-table__cell">1</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">666 Token Circle, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-024</td>
          <td class="ds-c-table__cell">2023-10-30</td>
          <td class="ds-c-table__cell">$229.99</td>
          <td class="ds-c-table__cell">Credit Card</td>
          <td class="ds-c-table__cell"><span class="status-text success">Completed</span></td>
          <td class="ds-c-table__cell">2</td>
          <td class="ds-c-table__cell">Express</td>
          <td class="ds-c-table__cell">777 Token Drive, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-025</td>
          <td class="ds-c-table__cell">2023-10-31</td>
          <td class="ds-c-table__cell">$189.99</td>
          <td class="ds-c-table__cell">PayPal</td>
          <td class="ds-c-table__cell"><span class="status-text">Processing</span></td>
          <td class="ds-c-table__cell">2</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">888 Token Court, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-026</td>
          <td class="ds-c-table__cell">2023-10-31</td>
          <td class="ds-c-table__cell">$279.99</td>
          <td class="ds-c-table__cell">Bank Transfer</td>
          <td class="ds-c-table__cell"><span class="status-text warning">Pending</span></td>
          <td class="ds-c-table__cell">3</td>
          <td class="ds-c-table__cell">Express</td>
          <td class="ds-c-table__cell">999 Token Place, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-027</td>
          <td class="ds-c-table__cell">2023-11-01</td>
          <td class="ds-c-table__cell">$199.99</td>
          <td class="ds-c-table__cell">Credit Card</td>
          <td class="ds-c-table__cell"><span class="status-text success">Completed</span></td>
          <td class="ds-c-table__cell">2</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">1010 Token Road, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-028</td>
          <td class="ds-c-table__cell">2023-11-01</td>
          <td class="ds-c-table__cell">$169.99</td>
          <td class="ds-c-table__cell">PayPal</td>
          <td class="ds-c-table__cell"><span class="status-text">Processing</span></td>
          <td class="ds-c-table__cell">1</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">1111 Token Street, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-029</td>
          <td class="ds-c-table__cell">2023-11-02</td>
          <td class="ds-c-table__cell">$249.99</td>
          <td class="ds-c-table__cell">Bank Transfer</td>
          <td class="ds-c-table__cell"><span class="status-text warning">Pending</span></td>
          <td class="ds-c-table__cell">2</td>
          <td class="ds-c-table__cell">Express</td>
          <td class="ds-c-table__cell">1212 Token Avenue, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-030</td>
          <td class="ds-c-table__cell">2023-11-02</td>
          <td class="ds-c-table__cell">$319.99</td>
          <td class="ds-c-table__cell">Credit Card</td>
          <td class="ds-c-table__cell"><span class="status-text success">Completed</span></td>
          <td class="ds-c-table__cell">3</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">1313 Token Boulevard, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-031</td>
          <td class="ds-c-table__cell">2023-11-03</td>
          <td class="ds-c-table__cell">$139.99</td>
          <td class="ds-c-table__cell">PayPal</td>
          <td class="ds-c-table__cell"><span class="status-text">Processing</span></td>
          <td class="ds-c-table__cell">1</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">1414 Token Way, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-032</td>
          <td class="ds-c-table__cell">2023-11-03</td>
          <td class="ds-c-table__cell">$289.99</td>
          <td class="ds-c-table__cell">Bank Transfer</td>
          <td class="ds-c-table__cell"><span class="status-text warning">Pending</span></td>
          <td class="ds-c-table__cell">3</td>
          <td class="ds-c-table__cell">Express</td>
          <td class="ds-c-table__cell">1515 Token Lane, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-033</td>
          <td class="ds-c-table__cell">2023-11-04</td>
          <td class="ds-c-table__cell">$209.99</td>
          <td class="ds-c-table__cell">Credit Card</td>
          <td class="ds-c-table__cell"><span class="status-text success">Completed</span></td>
          <td class="ds-c-table__cell">2</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">1616 Token Circle, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-034</td>
          <td class="ds-c-table__cell">2023-11-04</td>
          <td class="ds-c-table__cell">$179.99</td>
          <td class="ds-c-table__cell">PayPal</td>
          <td class="ds-c-table__cell"><span class="status-text">Processing</span></td>
          <td class="ds-c-table__cell">2</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">1717 Token Drive, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-035</td>
          <td class="ds-c-table__cell">2023-11-05</td>
          <td class="ds-c-table__cell">$259.99</td>
          <td class="ds-c-table__cell">Bank Transfer</td>
          <td class="ds-c-table__cell"><span class="status-text warning">Pending</span></td>
          <td class="ds-c-table__cell">2</td>
          <td class="ds-c-table__cell">Express</td>
          <td class="ds-c-table__cell">1818 Token Court, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-036</td>
          <td class="ds-c-table__cell">2023-11-05</td>
          <td class="ds-c-table__cell">$199.99</td>
          <td class="ds-c-table__cell">Credit Card</td>
          <td class="ds-c-table__cell"><span class="status-text success">Completed</span></td>
          <td class="ds-c-table__cell">2</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">1919 Token Place, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-037</td>
          <td class="ds-c-table__cell">2023-11-06</td>
          <td class="ds-c-table__cell">$169.99</td>
          <td class="ds-c-table__cell">PayPal</td>
          <td class="ds-c-table__cell"><span class="status-text">Processing</span></td>
          <td class="ds-c-table__cell">1</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">2020 Token Road, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-038</td>
          <td class="ds-c-table__cell">2023-11-06</td>
          <td class="ds-c-table__cell">$229.99</td>
          <td class="ds-c-table__cell">Bank Transfer</td>
          <td class="ds-c-table__cell"><span class="status-text warning">Pending</span></td>
          <td class="ds-c-table__cell">2</td>
          <td class="ds-c-table__cell">Express</td>
          <td class="ds-c-table__cell">2121 Token Street, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-039</td>
          <td class="ds-c-table__cell">2023-11-07</td>
          <td class="ds-c-table__cell">$299.99</td>
          <td class="ds-c-table__cell">Credit Card</td>
          <td class="ds-c-table__cell"><span class="status-text success">Completed</span></td>
          <td class="ds-c-table__cell">3</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">2222 Token Avenue, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
        <tr class="ds-c-table__row">
          <td class="ds-c-table__cell">ORD-2023-040</td>
          <td class="ds-c-table__cell">2023-11-07</td>
          <td class="ds-c-table__cell">$189.99</td>
          <td class="ds-c-table__cell">PayPal</td>
          <td class="ds-c-table__cell"><span class="status-text">Processing</span></td>
          <td class="ds-c-table__cell">2</td>
          <td class="ds-c-table__cell">Standard</td>
          <td class="ds-c-table__cell">2323 Token Boulevard, Pittsburgh, PA 15120</td>
          <td class="ds-c-table__cell">$20.00</td>
          <td class="ds-c-table__cell">-$10.00</td>
          <td class="ds-c-table__cell">$259.99</td>
        </tr>
      </tbody>
    </table>
  </div>`,
  component: 'ds-table'
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {};
