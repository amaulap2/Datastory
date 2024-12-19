# Type-1 Bot Analysis

Type-1 bots, i.e. bots that post a lot of comments under the same video, are very common on Youtube. Indeed, we are very familiar with the *auto-reply bots* that content creators use on their channels to increase engagement on their channel. These bots are made to interact with the viewers and make them feel like they are part of a community. However, these bots can also be used to spam the comment section of a video, which can be very annoying for the viewers. 

In this section we will analyze the behavior of these bots and how they affect the engagement metrics of a video. We will also try to characterize where these bots are most active and what kind of content they target.

### Do Bots Target Specific Categories of Videos?

To answer this question, we first need to understand how bots are distributed across different categories of videos. We can do this by looking at the proportion of comments made by bots in each category over time.

<!-- <div style="text-align: center;" id="Figure1">
<figure>
  <img src="{{ site.baseurl }}/assets/data/type-1_analysis/prop_comments_per_category_normal.svg" alt="Local Image" class='center'>
  <center>
  <figcaption>
  <p style="margin-top:-0.6cm;margin-left:0.2cm;">
    <font size=2>Figure 1: Proportion of Video Categories over time, Normal Users.</font>
  </p>
  </figcaption>
  </center>
</figure>
</div> -->

<div style="text-align: center;" id="Figure1">
<figure>
  <iframe src="{{ site.baseurl }}/assets/data/type-1_analysis/prop_comments_per_category_normal.html" 
          width="100%" 
          height="500" 
          style="border:none;">
  </iframe>
  <center>
  <figcaption>
    <p style="margin-top:-0.6cm;margin-left:0.2cm;">
      <font size="2">Figure 1: Proportion of Video Categories over time, Normal Users. </font>
    </p>
  </figcaption>
  </center>
</figure>
</div>



In <a href="#Figure1">Figure 1</a>, we first show the proportion of comments per category over time for normal users (i.e. users not considered as having suspicious activities). We observe the emergence and decrease in interest in some categories. The most obvious one is the great increase in interest in *Gaming* especially since 2010. This is followed by a decrease in interest in *Music* and *Entertainment* categories.

<!-- <div style="text-align: center;" id="Figure2">
<figure>
  <img src="{{ site.baseurl }}/assets/data/type-1_analysis/prop_comments_per_category_sus.svg" alt="Local Image" class='center'>
  <center>
  <figcaption>
  <p style="margin-top:-0.6cm;margin-left:0.2cm;">
    <font size=2>Figure 2: Proportion of Video Categories over time, Suspicious Users.</font>
  </p>
  </figcaption>
  </center>
</figure>
</div> -->

<div style="text-align: center;" id="Figure2">
<figure>
  <iframe src="{{ site.baseurl }}/assets/data/type-1_analysis/prop_comments_per_category_sus.html" 
          width="100%" 
          height="500" 
          style="border:none;">
  </iframe>
  <center>
  <figcaption>
    <p style="margin-top:-0.6cm;margin-left:0.2cm;">
      <font size="2">Figure 1: Proportion of Video Categories over time, Suspicious Users. </font>
    </p>
  </figcaption>
  </center>
</figure>
</div>

In <a href="#Figure2">Figure 2</a>, we show the proportion of comments per category over time for suspicious users. We see that the proportion of comments per category tend to follow the same trend as normal users. Which makes sense since we could assume that bots would target the same categories as normal users. However we note that some categories attract more bots than normal users. For example, the *Howto & Style* category has a much higher proportion of comments from bots than it did for normal users. It might be due to the fact that content creators in this category are more likely to use bots to increase engagement on their videos. 
*Comedy* on the contrary, seems to be less targeted by bots than normal users. 

### Do Bots Target Specific Channels?

Another interesting question to ask is whether bots target specific channels, meaning are they more likely to comment on videos from a single specific channel or they are more likely to comment on videos from multiple channels. To answer this question, we categorized users by the number of channels they commented on and looked at the proportion of comments made by bots in each category. 

<!-- <div style="text-align: center;" id="Figure3">
<figure>
  <img src="{{ site.baseurl }}/assets/data/type-1_analysis/prop_normal_per_channels.svg" alt="Local Image" class='center'>
  <center>
  <figcaption>
  <p style="margin-top:-0.6cm;margin-left:0.2cm;">
    <font size=2>Figure 3: Proportion of Normal Users commenting on 1, 2,..., 5+ Channels.</font>
  </p>
  </figcaption>
  </center>
</figure>
</div> -->

<div style="text-align: center;" id="Figure3">
<figure>
  <iframe src="{{ site.baseurl }}/assets/data/type-1_analysis/prop_normal_per_channels.html" 
          width="100%" 
          height="500" 
          style="border:none;">
  </iframe>
  <center>
  <figcaption>
    <p style="margin-top:-0.6cm;margin-left:0.2cm;">
      <font size="2">Figure 3: Proportion of Normal Users commenting on 1, 2,..., 5+ Channels.</font>
    </p>
  </figcaption>
  </center>
</figure>
</div>

In <a href="#Figure3">Figure 3</a>, we show the proportion of normal users commenting on 1, 2, 3, 4 and 5 or more channels. We see that most normal users comment on videos from multiple channels. This is expected since normal users are more likely to be interested in a variety of content and do not limit their interactions to a single channel.

<!-- <div style="text-align: center;" id="Figure4">
<figure>
  <img src="{{ site.baseurl }}/assets/data/type-1_analysis/prop_sus_per_channels.svg" alt="Local Image" class='center'>
  <center>
  <figcaption>
  <p style="margin-top:-0.6cm;margin-left:0.2cm;">
    <font size=2>Figure 4: Proportion of Suspicious Users commenting on 1, 2,..., 5+ Channels.</font>
  </p>
  </figcaption>
  </center>
</figure>
</div> -->

<div style="text-align: center;" id="Figure4">
<figure>
  <iframe src="{{ site.baseurl }}/assets/data/type-1_analysis/prop_bots_per_channels_sus.html" 
          width="100%" 
          height="500" 
          style="border:none;">
  </iframe>
  <center>
  <figcaption>
    <p style="margin-top:-0.6cm;margin-left:0.2cm;">
      <font size="2">Figure 4: Proportion of Suspicious Users commenting on 1, 2,...,+Channels  </font>
    </p>
  </figcaption>
  </center>
</figure>
</div>

On the other hand, on <a href="#Figure4">Figure 4</a>, we observe that most suspicious users comment on videos from a single channel. This is an interesting observation since it shows that bots are more likely to target a single channel than normal users. This could be due to the fact that bots are programmed to target a specific channel to increase engagement on that channel. This observation tends to confirm our assumption that Type-1 bots are most likely used by the channel moderators to increase engagement on their channel.

### How do Bots Affect Engagement Metrics?

Finally, we want to understand how bots affect the engagement metrics of a video. To do this, we analyzed some important metrics such as the number of likes, comments, and replies on a video. We compared the engagement metrics of videos with a high proportion of comments from bots to videos with a low proportion of comments from bots. Here the normalization is done by dividing the engagement metrics by their maximum value registered in the dataset.

<!-- 
<div style="text-align: center;" id="Figure5">
<figure>
  <img src="{{ site.baseurl }}/assets/data/type-1_analysis/normalized_metrics.svg" alt="Local Image" class='center'>
  <center>
  <figcaption>
  <p style="margin-top:-0.6cm;margin-left:0.2cm;">
    <font size=2>Figure 5: Normalized Metrics for Normal Users.</font>
  </p>
  </figcaption>
  </center>
</figure>
</div> -->


<div style="text-align: center;" id="Figure5">
<figure>
  <iframe src="{{ site.baseurl }}/assets/data/type-1_analysis/normalized_metrics.html" 
          width="100%" 
          height="500" 
          style="border:none;">
  </iframe>
  <center>
  <figcaption>
    <p style="margin-top:-0.6cm;margin-left:0.2cm;">
      <font size="2">Figure 5: Normalized Metrics for Normal Users.</font>
    </p>
  </figcaption>
  </center>
</figure>
</div>

As expected and as can be seen on <a href="#Figure5">Figure 5</a>, we see that the engagement metrics go up every year for normal users, at the exception of the last year which is simply due to the fact that we do not have the full data for this year. This upward trend is expected since the number of users on Youtube has been increasing every year. All trend seem similar between bots and normal users, beside the number of comments which has a very different trend. 

<!-- <div style="text-align: center;" id="Figure6">
<figure>
  <img src="{{ site.baseurl }}/assets/data/type-1_analysis/normalized_metrics_sus.svg" alt="Local Image" class='center'>
  <center>
  <figcaption>
  <p style="margin-top:-0.6cm;margin-left:0.2cm;">
    <font size=2>Figure 6: Normalized Metrics for Suspicious Users.</font>
  </p>
  </figcaption>
  </center>
</figure>
</div>
 -->

<div style="text-align: center;" id="Figure6">
<figure>
  <iframe src="{{ site.baseurl }}/assets/data/type-1_analysis/normalized_metrics_sus.html" 
          width="100%" 
          height="500" 
          style="border:none;">
  </iframe>
  <center>
  <figcaption>
    <p style="margin-top:-0.6cm;margin-left:0.2cm;">
      <font size="2">Figure 6: Normalized Metrics for Suspicious Users.</font>
    </p>
  </figcaption>
  </center>
</figure>
</div>

On <a href="#Figure6">Figure 6</a>, we see that *Total Likes, Comments, Replies and number of bots* follow the same trend as normal users. However, we see that the *Comments per User* metric is proportionally higher and pretty much constant over the year for suspicious users. This is an interesting observation since it shows that bots kept the same level of comments per user over the years. 

<!-- <div style="text-align: center;">
<figure>
<iframe src="{{ site.baseurl }}/assets/data/type-1_analysis/heatmap_norm_sus.html" 
          width="100%" 
          height="500" 
          style="border:none;">
  </iframe>
  <center>
  <figcaption>
  <p style="margin-top:-0.2cm;margin-left:0.2cm;">
    <font size=2>Figure 7: Correlation Matrix of Normalized Metrics for Normal vs Suspicious Users.</font>
  </p>
  </figcaption>
  </center>
</figure>
</div> -->

<div style="text-align: center;" id="Figure7">
<figure>
  <iframe src="{{ site.baseurl }}/assets/data/type-1_analysis/heatmap_norm_sus.html" 
          width="100%" 
          height="500" 
          style="border:none;">
  </iframe>
  <center>
  <figcaption>
    <p style="margin-top:-0.6cm;margin-left:0.2cm;">
      <font size="2">Figure 7: Correlation Matrix of Normalized Metrics for Normal vs Suspicious Users.</font>
    </p>
  </figcaption>
  </center>
</figure>
</div>


Finally, on <a href="#Figure6">Figure 7</a>, we show the correlation matrix of the normalized metrics for normal and suspicious users.

**High Correlation Between Groups**

There is a high correlation between some **normal user metrics** and **suspected bot metrics** (values around 0.85-0.99). For example:  
- `normal_unique_users` correlates strongly with `sus_total_comments` (0.99).  
- `normal_total_comments` also correlates highly with `sus_total_likes` (0.99).  

This may indicate that the overall platform activity (both normal and suspected bot) is growing over time or responding to similar trends.

**Low Correlation Between Comments per User**

The correlation between `normal_comments_per_user` and `sus_comments_per_user` is significantly lower (0.52). This supports the observation that bots and normal users differ in their commenting behavior, as bots typically have a much higher number of comments per user.

<div style="text-align: center;" id="Figure8">
<figure>
  <img src="{{ site.baseurl }}/assets/data/type-1_analysis/Graph_viz_1.png" alt="Local Image" class='center'>
  <center>
  <figcaption>
  <p style="margin-top:-0.2cm;margin-left:0.2cm;">
    <font size=2>Figure 8: Network Graph visualizing interactions between channels.</font>
  </p>
  </figcaption>
  </center>
</figure>
</div>

This network graph illustrates **channels targeted by bots**, where:  
- **Nodes** represent individual channels targeted by bots.  
- **Links** between nodes indicate shared suspicious users across channels.  

**Observations:**  
   - Most channels targeted by bots are interconnected, forming a large primary cluster.  
   - A second, smaller cluster is composed of several very small "sub-communities."  

**Hypotheses**

1. **Shared Bot Service:**  
   - Some groups of service providers may be selling bots to multiple clients. Over time, these bots could switch between clients, creating connections between previously unrelated channels.

2. **Normal User Overlap:**  
   - The presence of regular users within the network could inadvertently connect unrelated channels through their activity.

3. **YouTube's Interconnected Nature:**  
   - Channels on YouTube are inherently interconnected as users typically engage with multiple channels rather than focusing on a single one.

4. **Sample Bias:**  
   - Since the graph includes only channels targeted by bots, it’s possible that including non-targeted channels would reveal additional, separate clusters.

To conclude the network graph shows that, within the sample of bot-targeted channels, **most channels are interconnected** through suspicious user activity. However, this analysis is limited to the selected sample and may not represent the broader YouTube ecosystem.