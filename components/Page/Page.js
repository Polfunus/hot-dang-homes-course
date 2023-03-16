import { MainMenu } from 'components/MainMenu';
import { BlockRenderer } from 'components/BlockRenderer';

export const Page = (props) => {
    return (
        <div>
            <MainMenu items={props.mainMenuItems} callToAction={props.callToAction} />
            <BlockRenderer blocks={props.blocks} />
        </div>
    )
}

