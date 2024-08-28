function Logo() {
    return (
        <>
            <div className="grid grid-cols-2 grid-rows-2 w-12 h-12 bg-white text-main-purple rounded">
                <div className="flex justify-center items-center border border-main-purple text-lg">+</div>
                <div className="flex justify-center items-center border border-main-purple text-lg">-</div>
                <div className="flex justify-center items-center border border-main-purple text-lg">×</div>
                <div className="flex justify-center items-center border border-main-purple text-lg">÷</div>
            </div>
        </>
    );
}

export default Logo;

