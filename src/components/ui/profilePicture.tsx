const ProfilePicture = ({alphabet} : {alphabet : string }) => {
    return ( 
        <main className="size-6 md:size-8 xl:size-10 rounded-[50%] bg-primaryOrange flex items-center justify-center p-4 md:p-2">
            <p className="font-semibold text-xl md:text-2xl xl:text-3xl text-white uppercase">{alphabet}</p>
        </main>
     );
}
 
export default ProfilePicture;