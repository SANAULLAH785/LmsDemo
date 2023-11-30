import { useState } from 'react';
import { Collapse } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PropTypes from 'prop-types';

const { Panel } = Collapse;

const RichText = ({ content, setContent }) => {
  return (
    <Collapse defaultActiveKey={['1']} expandIconPosition="right">
      <Panel header="General Information" key="1">
        <ReactQuill
          theme="snow"
          value={content.richText}
          onChange={(e) => setContent((prevState) => ({ ...prevState, richText: e }))}
          placeholder="Rich Text"
        />
      </Panel>
    </Collapse>
  );
};
RichText.propTypes = {
  setContent: PropTypes.func.isRequired,
  content: PropTypes.String
};
export default RichText;
