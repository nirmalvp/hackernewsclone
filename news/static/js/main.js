function upvote(btn, l_id,upvotecount) {
    $.ajax({
        url : "upvote/",
        type : "POST",
        data : { articleId : l_id},
        success : function(json) {
            if (json.error){
                $("#myModal").modal('toggle');
            }
            else{
            btn.text(json['btn_text'])
            upvotecount.html(json['total_votes']+ " upvotes");
            }
        }
    });
};

$('.vote_form').on('submit', function(event){
    event.preventDefault();
    var btn = $("button", this);
    var upvotecount = $(".upvotecount", this);
    var l_id = $(".hidden_id", this).val();
    upvote(btn, l_id,upvotecount);
});
