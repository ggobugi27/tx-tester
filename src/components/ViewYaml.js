import React, { useState, useContext, useEffect } from 'react';
import { Button, Grid, Input, Icon, Form, List,
  Modal, Header, Message, Popup, Select, Radio,
  Tab, TextArea, Loader } from 'semantic-ui-react';

const ViewYaml = (props) => {
  //need to figure out how to indent properly
  //and to multiline pact commands -> this may not be necessary
  return (
    <Header as="h1" style={{color:'black',  fontSize: 15, margin: 5}}>
      <div style={{textAlign: "left"}}>
        <code style={{wordBreak: "break-all"}}>
          code: |-
        </code>
      </div>
      <div style={{textAlign: "left"}}>
        <code style={{wordBreak: "break-all"}}>
          {props.pactCode}
        </code>
      </div>
      {(props.ksName !== "" ?
        <div>
          <div style={{textAlign: "left"}}>
            <code style={{wordBreak: "break-all"}}>
              data:
            </code>
          </div>
          <div style={{textAlign: "left"}}>
            <code style={{wordBreak: "break-all"}}>
              {props.ksName + ":"}
            </code>
          </div>
          <div style={{textAlign: "left"}}>
            <code style={{wordBreak: "break-all"}}>
              {"keys: [" + props.envKeys + "]"}
            </code>
          </div>
          <div style={{textAlign: "left"}}>
            <code style={{wordBreak: "break-all"}}>
              {"pred: \"" + props.pred + "\""}
            </code>
          </div>
        </div>
      : <div></div>)}
      <div style={{textAlign: "left"}}>
        <code style={{wordBreak: "break-all"}}>
          publicMeta:
        </code>
      </div>
      <div style={{textAlign: "left"}}>
        <code style={{wordBreak: "break-all"}}>
          {' '}{"chainId: \"" + props.chainId + "\""}
        </code>
      </div>
      <div style={{textAlign: "left"}}>
        <code style={{wordBreak: "break-all"}}>
          {"sender: " + props.acct}
        </code>
      </div>
      <div style={{textAlign: "left"}}>
        <code style={{wordBreak: "break-all"}}>
          {"gasLimit: " + props.gasLimit}
        </code>
      </div>
      <div style={{textAlign: "left"}}>
        <code style={{wordBreak: "break-all"}}>
          {"gasPrice: " + props.gasPrice}
        </code>
      </div>
      <div style={{textAlign: "left"}}>
        <code style={{wordBreak: "break-all"}}>
          {"ttl: " + props.ttl}
        </code>
      </div>
      <div style={{textAlign: "left"}}>
        <code style={{wordBreak: "break-all"}}>
          {"networkId: \"" + props.ver + "\""}
        </code>
      </div>
      <div style={{textAlign: "left"}}>
        <code style={{wordBreak: "break-all"}}>
          signers:
        </code>
      </div>
      <div style={{textAlign: "left"}}>
        <code style={{wordBreak: "break-all"}}>
          {"- public: " + props.pubKey}
        </code>
      </div>
      {props.caps.length > 0 ?
        <div>
          <div style={{textAlign: "left"}}>
            <code style={{wordBreak: "break-all"}}>
              caps:
            </code>
          </div>
          {props.caps.map((cap, i) => {
            const strs = cap.replace("(", "").replace(")", "").split(" ")
            return (
              <div key={i}>
                <div style={{textAlign: "left"}}>
                  <code style={{wordBreak: "break-all"}}>
                    {"- name: " + strs.shift()}
                  </code>
                </div>
                <div style={{textAlign: "left"}}>
                  <code style={{wordBreak: "break-all"}}>
                    {"args: [" + strs.map((str) => isNaN(str) ? str : parseFloat(str)) + "]"}
                  </code>
                </div>
              </div>
            );
          })}
        </div>
      : <div></div>}
      <div style={{textAlign: "left"}}>
        <code style={{wordBreak: "break-all"}}>
          type: exec
        </code>
      </div>
    </Header>
  )
}

export default ViewYaml;
