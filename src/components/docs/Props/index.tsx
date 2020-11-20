import React, { Fragment, ReactNode, FC } from 'react'
import styled from 'styled-components'
import Highlight from '../Highlight'
import Value from '../Value'

const Table = styled.table`
  /* border: 1px solid rgba(255, 255, 255, 0.2); */
  border-collapse: collapse;
`

const Head = styled.thead`
  background-color: #112f4a;
`

const HeadCol = styled.th`
  padding: 8px;
  text-align: left;
  min-width: 120px;
  font-size: 16px;
  height: 40px;
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.2); */
`

const Row = styled.tr`
  &:nth-child(odd) {
    background-color: rgba(255, 255, 255, 0.04);
  }
`

const Col = styled.td`
  padding: 8px;
  font-size: 14px;
  height: 40px;
`

const Props = ({ children, noDefaults }) => {
  return (
    <Table>
      <Head>
        <tr>
          <HeadCol>Name</HeadCol>
          <HeadCol>Type</HeadCol>
          {!noDefaults && <HeadCol>Default value</HeadCol>}
          <HeadCol>Description</HeadCol>
        </tr>
      </Head>
      <tbody>{children}</tbody>
    </Table>
  )
}

type PropProps = {
  name: string
  type: string
  defaultValue?: any
  label?: string | ReactNode
}

const Prop: FC<PropProps> = ({ name, type, defaultValue, label }) => {
  const propTypes = type.split(' | ')

  return (
    <Row>
      <Col>
        <Highlight>{name}</Highlight>
      </Col>
      <Col>
        {propTypes.map((item, i) => {
          return (
            <Fragment key={i}>
              <Value>{item}</Value> {propTypes.length - 1 !== i && <>| </>}
            </Fragment>
          )
        })}
      </Col>
      {defaultValue && (
        <Col>
          <Highlight>{defaultValue}</Highlight>
        </Col>
      )}
      <Col>{label}</Col>
    </Row>
  )
}

export { Props, Prop }
