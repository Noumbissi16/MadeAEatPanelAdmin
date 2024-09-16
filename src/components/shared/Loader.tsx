const Loading = () => {
  return (
    <div className="flex-center w-full flex flex-row gap-2 items-center">
      <img
        src="/assets/icons/loader.svg"
        alt="loader"
        width={24}
        height={24}
        className="animate-spin"
      />
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
