const Pagination = ({ gotoNextPage, gotoPrevPage }) => {
  return (
    <>
      <div className="bottom-buttons">
        {gotoPrevPage && (
          <button className="load-more" onClick={gotoPrevPage}>
            Previous
          </button>
        )}
        {gotoNextPage && (
          <button className="load-more" onClick={gotoNextPage}>
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default Pagination;
