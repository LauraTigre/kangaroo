import Button from '../library/Button'
import Container from '../library/Container'
import Feedback from './Feedback'

function Alert({ message, level = 'error', onAccept }) {
    return <Container TagName="section" className="justify-center w-full h-full fixed top-0 bg-black/[0.5]">
        <Container TagName="section" className="bg-[smokewhite] p-5 border-[grey] border-2">
            <Feedback message={message} level={level} />

            <Button onClick={onAccept}>Accept</Button>
        </Container>
    </Container>
}

export default Alert