<template>
  <div class="container">
    <div id="surveyContainer" class="wb-frmvld">
      <survey v-bind:survey="survey"></survey>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Model } from "survey-vue";
import showdown from "showdown";

@Component
export default class AssessmentTool extends Vue {
  @Prop() public survey!: Model;
  mounted() {
    const converter = new showdown.Converter();
    this.survey.onTextMarkdown.add((survey: any, options: any) => {
      //convert the markdown text to html
      var str = converter.makeHtml(options.text);
      //remove root paragraphs <p></p>
      str = str.substring(3);
      str = str.substring(0, str.length - 4);
      //set html
      options.html = str;
    });
    for (let item of document.getElementsByClassName("sv_q_rating_min_text")) {
      const fldset = item.closest("fieldset");
      const lbl = document.createElement("LABEL");
      lbl.className = "rating-min-label";
      lbl.appendChild(item);
      fldset?.prepend(lbl);
    }

    for (let item of document.getElementsByClassName("sv_q_rating_max_text")) {
      const fldset = item.closest("fieldset");
      const lbl = document.createElement("LABEL");
      lbl.className = "rating-max-label";
      lbl.appendChild(item);
      fldset?.append(lbl);
    }
  }
}
</script>
