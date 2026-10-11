export const SCENARIO_PRESETS = {
  scenarioA: {
    title: "Scenario A: Strong Answer (Mastery -> Escalation)",
    q1_answer: `To prevent data leakage when training a machine learning model, you must ensure that no information from the test or validation dataset is available during model training or feature engineering. 

First, the train/test split must occur before ANY preprocessing or feature transformations. If you fit a StandardScaler, Imputer, or TargetEncoder on the entire dataset, validation information leaks into the training pipeline. In scikit-learn, this is avoided by strictly encapsulating transformers and estimators inside a Pipeline object and calling fit_transform only on training splits.

Second, for time-series or sequential data, random k-fold cross-validation will cause temporal leakage (predicting past events using future context). Instead, time-series split or rolling window validation must be utilized.

Third, group-level leakage must be mitigated using GroupKFold when multiple samples belong to the same entity (e.g. medical patients or user accounts) so that an entity doesn't appear in both train and validation splits.`
  },
  scenarioB: {
    title: "Scenario B: Incomplete Answer (Gap -> Targeted Follow-Up)",
    q1_answer: `When training machine learning models, I usually start by loading the data into pandas and exploring the correlations. Then I split the data using train_test_split from sklearn. After that, I try several algorithms like Random Forest and XGBoost to see which one performs best. I tune the hyperparameters with GridSearchCV, check the accuracy and F1 score, and pick the best model for deployment.`
  }
};
