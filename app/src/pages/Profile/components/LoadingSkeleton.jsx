const Skeleton = () => {
  return (
    <div className="row">
      <div className="col">
        <div className="card_content">
          <div className="long"></div>
          <div className="short"></div>
        </div>
      </div>
    </div>
  );
};

export const BodySkeleton = () => {
  return (
    <div className="row">
      <div className="col">
        <div className="body_card_content">
          <div className="long_body"></div>
          <div className="medium_body"></div>
          <div className="short_body"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
