import { Button, Icon } from "@blueprintjs/core";


export default function Home() {
    return (
        <div>
            <h1>Dashboard</h1>

            <Button icon="refresh" intent="danger" text="Reset" />
            <Button icon="user" rightIcon="caret-down" text="Profile settings" />
            <Button rightIcon="arrow-right" intent="success" text="Next step" />
            {/* <Icon> children as inline text elements */}
            <Button>
                <Icon icon="document" /> Upload... <Icon icon="small-cross" />
            </Button>
        </div>
    );
}
