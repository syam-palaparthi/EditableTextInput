import {Component} from 'react'
import {
  BgContainer,
  Container,
  Heading,
  Input,
  Button,
  InlineContainer,
  InlineText,
} from './indexStyled'

class EditableTextInput extends Component {
  state = {text: '', isEditable: true}

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  changeText = () => {
    this.setState(prevState => ({
      isEditable: !prevState.isEditable,
    }))
  }

  render() {
    const {text, isEditable} = this.state
    return (
      <BgContainer>
        <Container>
          <Heading>Editable Text Input</Heading>
          <InlineContainer>
            {isEditable ? (
              <Input value={text} type="text" onChange={this.onChangeText} />
            ) : (
              <InlineText>{text}</InlineText>
            )}
            {isEditable ? (
              <Button type="button" onClick={this.changeText}>
                Save
              </Button>
            ) : (
              <Button type="button" onClick={this.changeText}>
                Edit
              </Button>
            )}
          </InlineContainer>
        </Container>
      </BgContainer>
    )
  }
}
export default EditableTextInput
