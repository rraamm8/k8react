import MyBoxFlag from "./MyBoxFlag"

export default function MyBox() {
    return (
        <div className="w-full h-full
                        flex justify-center items-center">
            <MyBoxFlag color='blue' />
            <MyBoxFlag color='orange'/>
        </div>
    )
}
