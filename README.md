# sw_arm-runner-action

Custom GitHub action for starting an ARM runner ec2 instance and stopping it at the end of a workflow.
Make sure to set `AWS_DEFAULT_REGION`, `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` environment variables correctly.

```yml
- name: arm runner
  uses: Q3DSW/sw_arm-runner-action@v1.0
```
